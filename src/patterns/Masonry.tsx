import { InternalPatternProps } from "./types";

export const Masonry: React.FunctionComponent<InternalPatternProps> = (
  props
) => (
  <svg height="100%" width="100%" className={props.className}>
    <defs>
      <pattern
        id="masonry"
        width="24"
        height="24"
        viewBox="0 0 40 40"
        patternUnits="userSpaceOnUse"
        patternTransform=""
      >
        <rect width="100%" height="100%" fill={props.color1 || "#5D4037"} />
        <path
          d="M0 40h-10v-60h60L40 0L33 7h-26v26z"
          fill={props.color2 || "#3E2723"}
        />
        <path
          d="M40 0v10h60v60L0 40L7 33h26v-26z"
          fill={props.color3 || "#795548"}
        />
        <path
          d="M40 0v10h60v60L0 40L5.714285714285714 34.285714285714285h28.57142857142857v-28.57142857142857z"
          fill={props.color2 || "#3E2723"}
        />
        <path
          d="M0 40h-10v-60h60L40 0L34.285714285714285 5.714285714285714h-28.57142857142857v28.57142857142857z"
          fill={props.color3 || "#795548"}
        />
      </pattern>
    </defs>
    <rect fill="url(#masonry)" height="200%" width="200%" />
  </svg>
);
