import React from "react";
import styles from "./Instructions.module.scss";

export const Instructions: React.FunctionComponent = () => (
  <>
    <section className={styles.section}>
      <h1>Opgave</h1>
      <ol className={styles.list}>
        <li>
          Byg et hus, som indeholder både en bygning, tag, vindue(r) og en dør.
        </li>
        <li>
          Experimentér med farver, størrelser, mønstrer, osv. på de forskellige
          komponenter.
        </li>
      </ol>
    </section>

    <section className={styles.section}>
      <h1>Bonus opgaver / idéer</h1>
      <ul className={styles.list}>
        <li>
          Byg flere (gerne forskellige) huse ved siden af det første for at
          skabe en gade
        </li>
        <li>
          Ændr i en komponents udseende (fx flyt håndtaget på døren til den
          anden side)
        </li>
        <li>
          Prøv at hente og bruge dine egne mønstre (intrukser findes ved
          src/patterns/README.md)
        </li>
        <li>Animér noget, fx få skyerne til at bevæge sig den modsætte vej</li>
        <li>
          Tilføj en ny variant (fx rundt vindue variant til Window componenten)
        </li>
        <li>Tilføj en ny komponent (fx skorsten, gardiner, sol, osv.)</li>
      </ul>
    </section>
  </>
);
