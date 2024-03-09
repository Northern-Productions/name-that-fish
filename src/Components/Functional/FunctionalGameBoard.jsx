import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalGameBoard({ setCorrectCount, setIncorrectCount, setAnswersLeft, setTotalCount}) {
  const [inputValue, setInputValue] = useState("");
  const [currentFishIndex, setCurrentFishIndex] = useState(0);
  const nextFishToName = initialFishes[currentFishIndex];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    inputValue.toLowerCase() === nextFishToName.name ? setCorrectCount((prev) => prev + 1) : setIncorrectCount((prev) => prev + 1);
    setAnswersLeft((remainingAnswers) => remainingAnswers.slice(1));
    setInputValue("");
    setCurrentFishIndex((currentFishIndex + 1) % initialFishes.length);
    setTotalCount((prev) => prev + 1);
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
          onChange={(e) => setInputValue(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
}
