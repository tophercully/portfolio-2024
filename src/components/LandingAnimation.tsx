import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface TypingAnimationProps {
  text: string[];
  typingSpeed: number;
  pauseDuration: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  typingSpeed,
  pauseDuration,
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [containerOffset, setContainerOffset] = useState<number | null>(null);
  const timerStartRef = useRef<number>(Date.now());
  const navigate = useNavigate();

  function setupSkipAnimation(skipCallback: () => void): void {
    const handleKeyPress = () => {
      skipCallback();
      document.removeEventListener("keydown", handleKeyPress);
    };

    document.addEventListener("keydown", handleKeyPress);
  }

  useEffect(() => {
    setupSkipAnimation(skipAnimation);
    const windowHeight = window.innerHeight;
    const startPosition = (windowHeight * 2.5) / 3;
    setContainerOffset(startPosition);

    const timer = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - timerStartRef.current) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const animateText = () => {
      if (currentBlockIndex >= text.length) {
        setIsAnimating(false);
        return;
      }

      if (currentCharIndex >= text[currentBlockIndex].length) {
        setTimeout(() => {
          setCurrentBlockIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
          setDisplayedText((prev) => [...prev, ""]);
        }, pauseDuration);
        return;
      }

      const currentChar = text[currentBlockIndex][currentCharIndex];
      // const nextChar = text[currentBlockIndex][currentCharIndex + 1] || '';

      setDisplayedText((prev) => {
        const newText = [...prev];
        newText[currentBlockIndex] = text[currentBlockIndex].slice(
          0,
          currentCharIndex + 1,
        );
        return newText;
      });

      let delay = typingSpeed;

      if (currentChar === "." || currentChar === "!") {
        delay += pauseDuration;
      } else if (currentChar === ",") {
        delay += pauseDuration * 0.5;
      } else if (currentChar === "—") {
        // This is an em-dash not a regular dash
        delay += pauseDuration * 1.5;
      } else if (currentChar === "...") {
        delay += pauseDuration * 2;
      }

      setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, delay);
    };

    const timeoutId = setTimeout(animateText, 0);
    return () => clearTimeout(timeoutId);
  }, [
    text,
    currentBlockIndex,
    currentCharIndex,
    isAnimating,
    pauseDuration,
    typingSpeed,
  ]);

  useEffect(() => {
    if (textContainerRef.current && containerOffset !== null) {
      const textHeight = textContainerRef.current.scrollHeight;
      const windowHeight = window.innerHeight;
      const startPosition = (windowHeight * 2.5) / 3;
      const newOffset = Math.max(0, startPosition - textHeight);
      setContainerOffset(newOffset);
    }
  }, [displayedText, containerOffset]);

  const skipAnimation = () => {
    setIsAnimating(false);
    setDisplayedText(text);
  };

  const renderTextWithEmailLink = (text: string) => {
    const parts = text.split("email me");
    return (
      <>
        {parts[0]}
        <a
          href="mailto:chriswmccully@gmail.com"
          target="_blank"
          className="cursor-pointer underline"
        >
          email me
        </a>
        {parts[1]}
      </>
    );
  };

  const renderTextWithPortfolioLink = (text: string) => {
    const parts = text.split("portfolio");
    return (
      <>
        {parts[0]}
        <span
          className="cursor-pointer underline"
          onClick={() => navigate("/portfolio")}
        >
          portfolio
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="relative h-[100svh] w-full overflow-y-auto bg-base-50 bg-opacity-50 text-base-950">
      {containerOffset !== null && (
        <div
          ref={containerRef}
          className="absolute inset-x-0 w-full transition-all duration-500 ease-in-out"
          style={{ top: `${containerOffset}px` }}
        >
          <div
            ref={textContainerRef}
            className="w-full px-4 font-montrealmono md:px-8 md:text-2xl lg:px-16"
          >
            {displayedText.map((block, index) => (
              <p
                key={index}
                className="mb-6 max-w-[80ch] pl-4 text-left leading-relaxed"
              >
                {block.includes("email me") ?
                  renderTextWithEmailLink(block)
                : block.includes("portfolio") ?
                  renderTextWithPortfolioLink(block)
                : block.replace(
                    /for less than a second, \(or insert time since load.*?\)/,
                    `for ${elapsedTime} seconds`,
                  )
                }
              </p>
            ))}
          </div>
        </div>
      )}
      {isAnimating && (
        <button
          onClick={skipAnimation}
          className="fixed bottom-4 right-4 z-10 rounded bg-blood px-5 py-3 text-sm text-white transition-colors duration-100 hover:bg-error"
        >
          <p className="inline lg:hidden">Skip</p>
          <p className="hidden lg:inline">Skip (or press any key)</p>
        </button>
      )}
    </div>
  );
};

export default TypingAnimation;
