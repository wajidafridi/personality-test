import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// @import context
import { AppContext } from "../../context";

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
    <div>
      <h2>Your Personality Trait</h2>
      <p>{personalityTrait}</p>
    </div>
  );
};

export default ResultScreen;
