interface Building {
  id: number;
  pattern?: "masonry" | "waves" | "stripes";
  roof?: "flat" | "hip";
}

export const buildings: Building[] = [
  {
    id: 1,
    pattern: "stripes",
    roof: "hip"
  },
  {
    id: 2,
    pattern: "waves",
    roof: "hip"
  },
  {
    id: 3,
    roof: "flat"
  }
];
