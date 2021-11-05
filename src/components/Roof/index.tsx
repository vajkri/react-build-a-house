import React from "react";
import styles from "./Roof.module.scss";

interface RoofProps {
  roofColor?: string;
  shape?: "flat" | "hip";
}

export const Roof: React.FunctionComponent<RoofProps> = (props) => (
  <div
    className={`${styles.roof} ${props.shape === "hip" && "is-hip"}`}
    style={
      {
        "--background": props.roofColor
      } as React.CSSProperties
    }
  ></div>
);
