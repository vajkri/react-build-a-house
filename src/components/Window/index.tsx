import React from "react";
import styles from "./Window.module.scss";

interface WindowProps {
  glassColor?: string;
  frameColorH?: string;
  frameColorS?: string;
  frameColorL?: string;
  baseSize?: string;
}

export const Window: React.FunctionComponent<WindowProps> = ({
  glassColor,
  frameColorH,
  frameColorS,
  frameColorL,
  baseSize
}) => (
  <div
    className={styles.window}
    style={
      {
        "--glassColor": glassColor,
        "--frameColorH": frameColorH,
        "--frameColorS": frameColorS,
        "--frameColorL": frameColorL,
        "--baseSize": baseSize
      } as React.CSSProperties
    }
  ></div>
);
