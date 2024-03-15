import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../data";
import { useState } from "react";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const currentFishIndex = correctCount + incorrectCount;
  const answersLeft = initialFishes
    .map((fish) => fish.name)
    .slice(currentFishIndex);
  const totalCount = initialFishes.length;
  const allGuessesMade = currentFishIndex === initialFishes.length;

  return (
    <>
      {!allGuessesMade && (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            setCorrectCount={setCorrectCount}
            setIncorrectCount={setIncorrectCount}
            currentFishIndex={currentFishIndex}
          />
        </>
      )}
      {allGuessesMade && (
        <FunctionalFinalScore
          totalCount={totalCount}
          correctCount={correctCount}
        />
      )}
    </>
  );
}
