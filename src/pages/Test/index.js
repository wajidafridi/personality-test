import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../../data";

const Question = ({ question, handleAnswer }) => {
  const [score, setScore] = useState(0);

  const handleScoreChange = (event) => {
    const newScore = parseInt(event.target.value, 10);
    setScore(newScore);
  };

  const handleNextQuestion = () => {
    handleAnswer(question.id, score);
  };

  return (
    <div className="questionContainer">
      <h2>Question {question.id}</h2>
      <p>{question.text}</p>
      <div className="answer-options">
        {question.answers.map((answer, index) => (
          <label key={index}>
            <input
              type="radio"
              value={answer.score}
              onChange={handleScoreChange}
              checked={score === answer.score}
            />
            {answer.text}
          </label>
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        className={`next-button ${score === 0 ? "disabled" : ""}`}
      >
        Next
      </button>
    </div>
  );
};

const TestScreen = () => {
  const navigate = useNavigate();

  const [scores, setScores] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = (questionId, score) => {
    setCurrentIndex(currentIndex < questions.length - 1 ? currentIndex + 1 : 0);
    setScores({ ...scores, [questionId]: score });
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="page">
      {questions.map(
        (question, index) =>
          index === currentIndex && (
            <Question
              key={index}
              question={question}
              handleAnswer={handleAnswer}
            />
          )
      )}
    </div>
  );
};

export default TestScreen;
