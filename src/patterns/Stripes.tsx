import { InternalPatternProps } from "./types";

export const Stripes: React.FunctionComponent<InternalPatternProps> = (
  props
) => (
  <svg height="100%" width="100%" className={props.className}>
    <defs>
      <pattern
        id="stripes"
        width="15"
        height="15"
        viewBox="0 0 40 40"
        patternUnits="userSpaceOnUse"
        patternTransform=""
      >
        <rect width="100%" height="100%" fill={props.color1 || "#ced1c3"} />
        <path d="m0 10h40v10h-40z" fill={props.color2 || "#babdb0"} />
      </pattern>
    </defs>
    <rect fill="url(#stripes)" height="200%" width="200%" />
  </svg>
);
