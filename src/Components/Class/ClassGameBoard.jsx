import { Component } from "react";
import "./styles/game-board.css";
import { initialFishes } from "../../data";

export class ClassGameBoard extends Component {
  state = {
    inputValue: "",
  };

  handelAnswer = (answer) => {
    const nextFishToName = initialFishes[this.props.currentFishIndex];
    answer.toLowerCase() === nextFishToName.name.toLowerCase()
      ? this.props.setCorrectCount(this.props.correctCount + 1)
      : this.props.setIncorrectCount(this.props.incorrectCount + 1);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.handelAnswer(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    const nextFishToName = initialFishes[this.props.currentFishIndex];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
