import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const HomeScreen = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Welcome to the Personality Test!</h1>
      <Link to="/test" className="button">
        Start Test
      </Link>
    </div>
  );
};

export default HomeScreen;
