import React from "react";
import styles from "./Instructions.module.scss";

export const Instructions: React.FunctionComponent = () => (
  <>
    <section className={styles.section}>
      <h2>Exercise</h2>
      <ol className={styles.list}>
        <li>
          Build a house, that includes both a building, a roof, windows and a
          door.
        </li>
        <li>
          Experiement with colors, sizes, patterns, etc. within the various
          components.
        </li>
      </ol>
    </section>

    <section className={styles.section}>
      <h2>Bonus tasks and ideas</h2>
      <ul className={styles.list}>
        <li>
          Build multiple (different) houses next to each other to create a
          street
        </li>
        <li>
          Update a component's design (e.g. move door handle over to the other
          side)
        </li>
        <li>
          Add a new svg building facade pattern (instructions can be found at
          src/patterns/README.md)
        </li>
        <li>Animate something (e.g. get the clouds to move the other way)</li>
        <li>
          Add a new prop / prop variant to an existing component (e.g. curtains
          for the window, double door, rain clouds, etc.)
        </li>
        <li>
          Add a component (e.g. chimney, sun, trash can, street lights, etc.)
        </li>
      </ul>
    </section>
  </>
);
