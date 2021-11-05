import { InternalPatternProps } from "./types";

export const Waves: React.FunctionComponent<InternalPatternProps> = (props) => (
  <svg height="100%" width="100%" className={props.className}>
    <defs>
      <pattern
        id="waves"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(135)"
      >
        <rect width="100%" height="100%" fill={props.color1 || "#2a4365"} />
        <path
          d="M0 29a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11zM0 69a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11z"
          fill={props.color2 || "#1a202c"}
        />
        <path
          d="M20 29.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z"
          fill={props.color3 || "#ecc94b"}
        />
      </pattern>
    </defs>
    <rect fill="url(#waves)" height="200%" width="200%" />
  </svg>
);
