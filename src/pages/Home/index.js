import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const HomeScreen = () => {
  return (
    <div className={`${styles.homePage}`}>
      <div className="section flex">
        <div className={`flex column ${styles.left}`}>
          <h1 className={styles.title}>Personality Test Project</h1>
          <p className={styles.description}>
            Take the test.
            <br />
            Explore your personality.
            <br />
            Advance the study of individual differences.
            <br />
          </p>
        </div>
        <div className={`${styles.right}`}>
          <Link to="/test" className={`button ${styles.button}`}>
            Start The Test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
