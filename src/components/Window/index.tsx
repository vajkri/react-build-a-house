import React from "react";
import { hexToHSL } from "../../helpers/hexToHsl";
import styles from "./Window.module.scss";

interface WindowProps {
  glassColor?: string;
  frameColor?: string;
  baseSize?: string;
}

export const Window: React.FunctionComponent<WindowProps> = ({
  glassColor,
  frameColor,
  baseSize
}) => {
  const hslFrameColor = frameColor && hexToHSL(frameColor);

  return (
    <div
      className={styles.window}
      style={
        {
          "--glassColor": glassColor,
          "--frameColorH": hslFrameColor ? hslFrameColor[0] + "deg" : undefined,
          "--frameColorS": hslFrameColor ? hslFrameColor[1] + "%" : undefined,
          "--frameColorL": hslFrameColor ? hslFrameColor[2] + "%" : undefined,
          "--baseSize": baseSize
        } as React.CSSProperties
      }
    ></div>
  );
};
