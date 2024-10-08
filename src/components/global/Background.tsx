import React, { useState, useEffect } from "react";
import { rv } from "../../util/random";

interface Orb {
  xA: number;
  yA: number;
  xB: number;
  yB: number;
  blur: number;
  color: string;
  size: number;
  animationDelay: string;
}

export const Background: React.FC = () => {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const baseOrbSize = ((window.innerWidth + window.innerHeight) / 2) * 0.006;
  useEffect(() => {
    const newOrbs: Orb[] = Array.from({ length: 8 }, () => ({
      xA: rv(-30, 130),
      yA: rv(-30, 130),
      xB: rv(-30, 130),
      yB: rv(-30, 130),
      blur: rv(150, 250),
      color: rv(0, 1) > 0.5 ? "bg-base-800" : "bg-base-200",
      size: rv(baseOrbSize, baseOrbSize * 3),
      animationDelay: `${rv(0, 20)}s`,
    }));
    setOrbs(newOrbs);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base-50">
      {orbs.map((orb, index) => {
        const { xA, yA, xB, yB, blur, size, color, animationDelay } = orb;
        return (
          <div
            key={index}
            className={`absolute rounded-full ${color}`}
            style={{
              width: `${size}rem`,
              height: `${size}rem`,
              filter: `blur(${blur}px)`,
              left: `${xA}vw`,
              top: `${yA}vh`,
              transition: "all 0.5s ease-in-out",
              animation: `float 40s ease-in-out infinite ${animationDelay}`,
            }}
          >
            <style>
              {`
                @keyframes float {
                  0%, 100% { transform: translate(0, 0); }
                  50% { transform: translate(calc(${xB - xA}vw), calc(${yB - yA}vh)); }
                }
              `}
            </style>
          </div>
        );
      })}
    </div>
  );
};
