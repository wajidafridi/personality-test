import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// @import context
import { AppContext } from "../../context";
// @import utils
import calculatePersonality from "../../utils/calculatePersonality";

// @import styles
import styles from "./index.module.scss";

const ResultScreen = () => {
  const navigate = useNavigate();
  const { appState } = useContext(AppContext);
  const { totalScore } = appState;
  const [personalityTrait, setPersonalityTrait] = useState();

  useEffect(() => {
    if (totalScore === null) {
      navigate("/");
    } else {
      setPersonalityTrait(calculatePersonality(totalScore));
    }
  }, []);

  return (
    <div className={styles.resultPage}>
      <div className={`${styles.resultContainer} section`}>
        <h2>Your Personality Trait</h2>
        <p className={styles.type}>{personalityTrait}</p>
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
};

export default ResultScreen;
