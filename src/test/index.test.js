// @import utils
import { calculateScore } from "../utils/calculatePersonality";

describe("Calculate Score", () => {
  it("It should calculate the correct score for the given answers", () => {
    const answers = [
      { questionId: 1, answerID: 5 },
      { questionId: 2, answerID: 1 },
      { questionId: 3, answerID: 5 },
      { questionId: 4, answerID: 3 },
      { questionId: 5, answerID: 4 },
      { questionId: 6, answerID: 1 },
      { questionId: 7, answerID: 3 },
    ];

    expect(calculateScore(answers)).toBe(23);
  });
});
