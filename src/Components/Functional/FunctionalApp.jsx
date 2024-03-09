import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(["trout", "salmon", "tuna", "shark"]);
  const [totalCount, setTotalCount] = useState(0);

  const guessesRemaining = answersLeft.length !== 0;
  const allGuessesMade = answersLeft.length === 0;

  return (
    <>
      {guessesRemaining && <FunctionalScoreBoard
      correctCount={correctCount}
      incorrectCount={incorrectCount}
      answersLeft={answersLeft}
      />}
      {guessesRemaining && <FunctionalGameBoard
      setCorrectCount={setCorrectCount}
      setIncorrectCount={setIncorrectCount}
      setAnswersLeft={setAnswersLeft}
      setTotalCount={setTotalCount}
      />}
      {allGuessesMade && <FunctionalFinalScore totalCount={totalCount} correctCount={correctCount} />}
    </>
  );
}
