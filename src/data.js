const answers = [
  {
    id: 1,
    text: "Strongly Disagree",
    score: 1,
  },
  {
    id: 2,
    text: "Disagree",
    score: 2,
  },
  {
    id: 3,
    text: "Neutral",
    score: 3,
  },
  {
    id: 4,
    text: "Agree",
    score: 4,
  },
  {
    id: 5,
    text: "Strongly Agree",
    score: 5,
  },
];

const questions = [
  {
    id: 1,
    text: "I enjoy spending time alone.",
    answers: answers,
  },
  {
    id: 2,
    text: "I prefer to socialize with a large group of people.",
    answers: answers,
  },
  {
    id: 3,
    text: "I feel energized after attending social events.",
    answers: answers,
  },
  // Add more questions here...
];

export default questions;
