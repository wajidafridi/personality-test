import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

// @import context
import { AppContext } from "../../context";
// @import actions
import { SET_TOTAL_SCORE } from "../../context/actions";

const HomeScreen = () => {
  const { appDispatch } = useContext(AppContext);

  useEffect(() => {
    appDispatch({
      type: SET_TOTAL_SCORE,
      payload: null,
    });
  }, []);

  return (
    <div className={`${styles.homePage}`}>
      <div className={`${styles.section} section flex`}>
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
