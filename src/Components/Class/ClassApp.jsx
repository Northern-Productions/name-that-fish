import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {

  state = {
    incorrectCount: 0,
    correctCount: 0,
    inputValue: "",
    answersLeft: ["trout", "salmon", "tuna", "shark"],
    totalCount: 0,
  };

  setCorrectCount = (updateFunction) => {
    this.setState((prevState) => ({ correctCount: updateFunction(prevState.correctCount) }));
  };

  setIncorrectCount = (updateFunction) => {
    this.setState((prevState) => ({ incorrectCount: updateFunction(prevState.incorrectCount) }));
  };

  setAnswersLeft = (updateFunction) => {
    this.setState((prevState) => ({ answersLeft: updateFunction(prevState.answersLeft) }));
  };

  setTotalCount = (updateFunction) => {
    this.setState((prevState) => ({ totalCount: updateFunction(prevState.totalCount) }));
  };

  render() {

    const guessesRemaining = this.state.answersLeft.length !== 0;
    const allGuessesMade = this.state.answersLeft.length === 0;

    return (
      <>
        <>
          {guessesRemaining && <ClassScoreBoard
          correctCount={this.state.correctCount}
          incorrectCount={this.state.incorrectCount}
          answersLeft={this.state.answersLeft}
          />}
          {guessesRemaining && <ClassGameBoard
          setCorrectCount={this.setCorrectCount}
          setIncorrectCount={this.setIncorrectCount}
          setAnswersLeft={this.setAnswersLeft}
          setTotalCount={this.setTotalCount}
          />}
        </>
        {allGuessesMade && <ClassFinalScore
        correctCount={this.state.correctCount}
        totalCount={this.state.totalCount}
        />}
      </>
    );
  }
}
