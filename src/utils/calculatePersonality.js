// @import data
import { questions, answers } from "../data";

export const calculateScore = (selectedAnswers) => {
  let totalScore = 0;

  selectedAnswers.forEach((item) => {
    const question = questions.find((q) => q.id === item.questionId);
    const answer = answers.find((a) => a.id === item.answerID);
    totalScore += question.score * answer.score;
  });

  return totalScore;
};

const calculatePersonality = (totalScore) => {
  const total_Score = Object.values(totalScore).reduce(
    (sum, score) => sum + score,
    0
  );
  const averageScore = total_Score / Object.keys(totalScore).length;

  return averageScore >= 0 ? "Extrovert" : "Introvert";
};

export default calculatePersonality;
