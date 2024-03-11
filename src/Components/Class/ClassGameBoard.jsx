import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

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

export class ClassGameBoard extends Component {

  state = {
    inputValue: "",
    currentFishIndex: 0,
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const nextFishToName = initialFishes[this.state.currentFishIndex];
    this.state.inputValue.toLowerCase() === nextFishToName.name ? this.props.setCorrectCount((prev) => prev + 1) : this.props.setIncorrectCount((prev) => prev + 1);
    this.props.setAnswersLeft((remainingAnswers) => remainingAnswers.slice(1));
    this.setState({ currentFishIndex: (this.state.currentFishIndex + 1) });
    this.setState({ inputValue: "" });
    this.props.setTotalCount((prev) => prev + 1);
  }

  render() {

    const nextFishToName = initialFishes[this.state.currentFishIndex];
    
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
