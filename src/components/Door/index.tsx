import React from "react";
import { hexToHSL } from "../../helpers/hexToHsl";
import styles from "./Door.module.scss";

interface DoorProps {
  baseSize?: string;
  doorColor?: string;
  hasStairs?: boolean;
}

export const Door: React.FunctionComponent<DoorProps> = (props) => {
  const hslColor = props.doorColor && hexToHSL(props.doorColor);

  return (
    <div
      className={`${styles.door} ${props.hasStairs ? "has-stairs" : ""}`}
      style={
        {
          "--baseSize": props.baseSize,
          "--doorColorH": hslColor ? hslColor[0] + "deg" : undefined,
          "--doorColorS": hslColor ? hslColor[1] + "%" : undefined,
          "--doorColorL": hslColor ? hslColor[2] + "%" : undefined
        } as React.CSSProperties
      }
    ></div>
  );
};
