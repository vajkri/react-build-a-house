import React from "react";
import { Masonry } from "../../patterns/Masonry";
import { Stripes } from "../../patterns/Stripes";
import { Waves } from "../../patterns/Waves";

export interface PatternProps {
  className?: string;
  pattern?: "masonry" | "waves" | "stripes";
  patternColor1?: string;
  patternColor2?: string;
  patternColor3?: string;
}

export const Pattern: React.FunctionComponent<PatternProps> = ({
  className,
  pattern,
  patternColor1,
  patternColor2,
  patternColor3
}) => {
  if (pattern && pattern === "masonry") {
    return (
      <Masonry
        className={className}
        color1={patternColor1}
        color2={patternColor2}
        color3={patternColor3}
      />
    );
  }

  if (pattern && pattern === "waves") {
    return (
      <Waves
        className={className}
        color1={patternColor1}
        color2={patternColor2}
        color3={patternColor3}
      />
    );
  }

  if (pattern && pattern === "stripes") {
    return (
      <Stripes
        className={className}
        color1={patternColor1}
        color2={patternColor2}
        color3={patternColor3}
      />
    );
  }

  return null;
};
