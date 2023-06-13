import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// @import context
import { AppContext } from "../../context";
// @import actions
import { SET_TOTAL_SCORE } from "../../context/actions";
// @import data
import { questions, answers } from "../../data";
// @import styles
import styles from "./index.module.scss";

const Question = ({
  question,
  totalScore,
  handleAnswer,
  totalQuestions,
  isLastQuestion,
  isFirstQuestion,
  handlePreviousQuestion,
}) => {
  const [score, setScore] = useState(null);

  const handleScoreChange = (event) => {
    const newScore = parseInt(event.target.value, 10);
    setScore(newScore);
  };

  const handleNextQuestion = () => {
    handleAnswer(question.id, score);
  };

  useEffect(() => {
    if (totalScore && totalScore.hasOwnProperty(question.id))
      setScore(totalScore[question.id]);
  }, [totalScore]);

  return (
    <div className={styles.question}>
      <p className={styles.questionNo}>
        Question {question.id}/{totalQuestions}
      </p>
      <h2 className={styles.title}>{question.text}</h2>
      <div className={`flex column ${styles.answerOptions}`}>
        {answers.map((answer, index) => (
          <label key={index} className={styles.option}>
            <input
              type="radio"
              onChange={handleScoreChange}
              value={answer.score * question.score}
              checked={score === answer.score * question.score}
            />
            {answer.text}
          </label>
        ))}
      </div>
      <div
        className={`flex justify-center items-center ${styles.buttonContainer}`}
      >
        <button
          disabled={isFirstQuestion}
          onClick={handlePreviousQuestion}
          className={`${styles.prev} button ${
            isFirstQuestion ? "disabled" : ""
          }`}
        >
          Previous
        </button>
        <button
          disabled={score === null}
          onClick={handleNextQuestion}
          className={`${styles.next} button ${
            score === null ? "disabled" : ""
          }`}
        >
          {isLastQuestion ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

const TestScreen = () => {
  const navigate = useNavigate();
  const { appDispatch, appState } = useContext(AppContext);
  const { totalScore } = appState;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = (questionId, score) => {
    setCurrentIndex(currentIndex < questions.length - 1 ? currentIndex + 1 : 0);

    const total_Score = { ...totalScore, [questionId]: score };
    appDispatch({
      type: SET_TOTAL_SCORE,
      payload: total_Score,
    });

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/result");
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className={styles.testPage}>
      <div className={`section ${styles.questionsContainer}`}>
        {questions.map(
          (question, index) =>
            index === currentIndex && (
              <Question
                key={index}
                question={question}
                totalScore={totalScore}
                totalQuestions={questions.length}
                handleAnswer={handleAnswer}
                handlePreviousQuestion={handlePreviousQuestion}
                isFirstQuestion={index === 0}
                isLastQuestion={index === questions.length - 1}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TestScreen;
