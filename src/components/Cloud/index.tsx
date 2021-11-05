import React from "react";
import styles from "./Cloud.module.scss";

interface CloudProps {
  baseSize?: string;
  topOffset?: string;
  delay?: string;
}

export const Cloud: React.FunctionComponent<CloudProps> = (props) => (
  <div
    className={styles.cloud}
    style={
      {
        "--baseSize": props.baseSize,
        "--topOffSet": props.topOffset,
        "--delay": props.delay
      } as React.CSSProperties
    }
  ></div>
);
