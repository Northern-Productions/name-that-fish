import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../data";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  updateState = (key, value) => {
    this.setState({ [key]: value });
  };

  setCorrectCount = (value) => {
    this.updateState("correctCount", value);
  };

  setIncorrectCount = (value) => {
    this.updateState("incorrectCount", value);
  };

  render() {
    const currentFishIndex =
      this.state.correctCount + this.state.incorrectCount;
    const answersLeft = initialFishes
      .map((fish) => fish.name)
      .slice(currentFishIndex);
    const totalCount = this.state.correctCount + this.state.incorrectCount;
    const allGuessesMade = answersLeft.length === 0;

    return (
      <>
        <>
          {!allGuessesMade && (
            <>
              <ClassScoreBoard
                correctCount={this.state.correctCount}
                incorrectCount={this.state.incorrectCount}
                answersLeft={answersLeft}
              />
              <ClassGameBoard
                correctCount={this.state.correctCount}
                incorrectCount={this.state.incorrectCount}
                setCorrectCount={this.setCorrectCount}
                setIncorrectCount={this.setIncorrectCount}
                currentFishIndex={currentFishIndex}
              />
            </>
          )}
        </>
        {allGuessesMade && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            totalCount={totalCount}
          />
        )}
      </>
    );
  }
}
