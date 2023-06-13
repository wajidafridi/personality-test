import React from "react";

const ResultScreen = ({ scores = 0 }) => {
  const calculatePersonality = () => {
    const totalScore = Object.values(scores).reduce(
      (sum, score) => sum + score,
      0
    );
    const averageScore = totalScore / Object.keys(scores).length;

    // Customize the threshold and condition based on your requirements
    if (averageScore >= 3) {
      return "Extrovert";
    } else {
      return "Introvert";
    }
  };

  const personalityTrait = calculatePersonality();

  return (
    <div className="page">
      <h2>Your Personality Trait</h2>
      <p>{personalityTrait}</p>
    </div>
  );
};

export default ResultScreen;
