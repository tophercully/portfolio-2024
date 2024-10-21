import React, { useState, useEffect } from "react";
import { ri, rv } from "../../util/random";

interface Orb {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
  x4: number;
  y4: number;
  blur: number;
  color: string;
  size: number;
  animationDuration: number;
}

export const BackgroundColored: React.FC = () => {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const baseOrbSize = ((window.innerWidth + window.innerHeight) / 2) * 0.004;
  const colors = ["bg-blood"];

  useEffect(() => {
    const newOrbs: Orb[] = Array.from({ length: 5 }, () => ({
      x1: rv(-50, 150),
      y1: rv(-50, 150),
      x2: rv(-50, 150),
      y2: rv(-50, 150),
      x3: rv(-50, 150),
      y3: rv(-50, 150),
      x4: rv(-50, 150),
      y4: rv(-50, 150),
      blur: rv(20, 60),
      color: colors[ri(0, colors.length - 1)],
      size: rv(baseOrbSize, baseOrbSize * 5),
      animationDuration: rv(120, 240),
    }));
    setOrbs(newOrbs);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base-50">
      {orbs.map((orb, index) => {
        const {
          x1,
          y1,
          x2,
          y2,
          x3,
          y3,
          x4,
          y4,
          blur,
          size,
          color,
          animationDuration,
        } = orb;
        return (
          <div
            key={index}
            className={`absolute rounded-full opacity-50 ${color}`}
            style={{
              width: `${size}rem`,
              height: `${size}rem`,
              filter: `blur(${blur}px)`,
              animation: `float-${index} ${animationDuration}s ease-in-out infinite`,
            }}
          >
            <style>
              {`
                @keyframes float-${index} {
                  0% { transform: translate(${x1}vw, ${y1}vh); }
                  25% { transform: translate(${x2}vw, ${y2}vh); }
                  50% { transform: translate(${x3}vw, ${y3}vh); }
                  75% { transform: translate(${x4}vw, ${y4}vh); }
                  100% { transform: translate(${x1}vw, ${y1}vh); }
                }
              `}
            </style>
          </div>
        );
      })}
    </div>
  );
};
