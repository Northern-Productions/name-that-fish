import "./styles/final-score.css";
//  Where the final score is presented
export const FunctionalFinalScore = ({ correctCount, totalCount }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
