import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// @import context
import { AppContext } from "../../context";
// @import styles
import styles from "./index.module.scss";

const ResultScreen = () => {
  const navigate = useNavigate();
  const { appState } = useContext(AppContext);
  const { totalScore } = appState;
  const [personalityTrait, setPersonalityTrait] = useState();

  const calculatePersonality = () => {
    const total_Score = Object.values(totalScore).reduce(
      (sum, score) => sum + score,
      0
    );
    const averageScore = total_Score / Object.keys(totalScore).length;

    // Customize the threshold and condition based on your requirements
    return averageScore >= 0 ? "Extrovert" : "Introvert";
  };

  useEffect(() => {
    if (totalScore === null) {
      navigate("/");
    } else {
      setPersonalityTrait(calculatePersonality());
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
