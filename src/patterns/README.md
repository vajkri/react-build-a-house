# Add a pattern

1. Create a new file YourPattern.tsx in `src/patterns`
2. Copy-paste Stripex.tsx into your new file
3. Update exported const to match your pattern's name (e.g. YourPattern)
4. Delete whole `<svg></svg>` element in YourPattern.tsx
5. Navigate to https://doodad.dev/pattern-generator/
6. Generate a pattern you like
7. Click on Inline SVG in the Export Options box
8. Click on Copy to Clipboard
9. Paste it into YourPattern.tsx, where the `<svg></svg>` element used to be
10. Add "yourPattern" as an option to PatternProps in `src/components/Pattern/index.tsx` at `pattern?: "masonry" | "waves" | "stripes";`
11. Add a new `if` block in `src/components/Pattern/index.tsx` around line 53, matching YourPattern
12. Use the new pattern in `src/pages/Playground/index.tsx`, like `<Building pattern="yourPattern">`
