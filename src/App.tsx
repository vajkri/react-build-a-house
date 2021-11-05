import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Demo } from "./pages/Demo";
import { Playground } from "./pages/Playground";
import { Instructions } from "./pages/Instructions";
import "./styles/index.scss";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.app}>
      <Router>
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Eksempel
          </Link>
          <Link className={styles.navLink} to="playground">
            Legeplads
          </Link>
          <Link className={styles.navLink} to="instructions">
            Vejledning
          </Link>
        </nav>

        <p className={styles.subTitle}>Byg dit eget</p>
        <h1 className={styles.title}>
          <span className="u-text-thin">Hese</span>
          <span className="u-text-bold">HUS</span>
        </h1>

        <Switch>
          <Route exact path="/">
            <main
              className={`${styles.main} ${styles.hasSky} ${styles.hasRoad} u-grid u-grid-gap--none u-grid-flow-col u-grid-auto-cols--max`}
            >
              <Demo />
            </main>
          </Route>
          <Route path="/playground">
            <main
              className={`${styles.main} u-grid u-grid-gap--none u-grid-flow-col u-grid-auto-cols--max`}
            >
              <Playground />
            </main>
          </Route>
          <Route path="/instructions">
            <main className={`${styles.main} ${styles.isText}`}>
              <Instructions />
            </main>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
