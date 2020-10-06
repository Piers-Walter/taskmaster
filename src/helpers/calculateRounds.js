import { numberOfQuestions } from "./generateQuestions";

export default (players) => {
  const toReturn = Math.floor(numberOfQuestions / players);
  if (toReturn === Infinity) return 1;
  return toReturn;
};
