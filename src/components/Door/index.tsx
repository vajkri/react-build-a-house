import React from "react";
import styles from "./Door.module.scss";

interface DoorProps {
  baseSize?: string;
  doorColorH?: string;
  doorColorS?: string;
  doorColorL?: string;
  hasStairs?: boolean;
}

export const Door: React.FunctionComponent<DoorProps> = (props) => (
  <div
    className={`${styles.door} ${props.hasStairs ? "has-stairs" : ""}`}
    style={
      {
        "--baseSize": props.baseSize,
        "--doorColorH": props.doorColorH,
        "--doorColorS": props.doorColorS,
        "--doorColorL": props.doorColorL
      } as React.CSSProperties
    }
  ></div>
);
