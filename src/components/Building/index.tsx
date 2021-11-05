import React from "react";
import styles from "./Building.module.scss";
import { Pattern, PatternProps } from "../Pattern";

interface BuildingProps extends PatternProps {
  width?: number;
  height?: number;
  background?: string;
}

export const Building: React.FunctionComponent<BuildingProps> = ({
  children,
  width,
  height,
  background,
  pattern,
  patternColor1,
  patternColor2,
  patternColor3
}) => (
  <div
    className={styles.building}
    style={{
      width: width || undefined,
      height: height || undefined,
      background: background || undefined
    }}
  >
    <Pattern
      className={styles.pattern}
      pattern={pattern}
      patternColor1={patternColor1}
      patternColor2={patternColor2}
      patternColor3={patternColor3}
    />
    {children}
  </div>
);
