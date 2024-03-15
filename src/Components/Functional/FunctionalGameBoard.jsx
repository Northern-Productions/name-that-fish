import "./styles/game-board.css";
import { useState } from "react";
import { initialFishes } from "../../data";

export function FunctionalGameBoard({
  setCorrectCount,
  setIncorrectCount,
  currentFishIndex,
}) {
  const [inputValue, setInputValue] = useState("");
  const nextFishToName = initialFishes[currentFishIndex];

  const handelAnswer = (answer) => {
    answer.toLowerCase() === nextFishToName.name.toLowerCase()
      ? setCorrectCount((prev) => prev + 1)
      : setIncorrectCount((prev) => prev + 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handelAnswer(inputValue);
    setInputValue("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleFormSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
