import { useState } from "react";

const ScoreInAnOver = () => {
  const [score, setScore] = useState(0);

  const addScore = (runs) => {
    if (runs === 0) {
      setScore(0); // or setScore(score * 0) which is mathmetically correct but not programmitically
      alert("You're out!");
    } else {
      if (runs === 4) alert("It's a four");
      if (runs === 6) alert("It's a six!");
      setScore((prev) => prev + runs);
    }
  };

  return (
    <div>
      <h2>Score in an over</h2>
      <h4>Score: {score}</h4>
      <button onClick={() => addScore(1)}>Single Score</button>
      <button onClick={() => addScore(2)}>Double Score</button>
      <button onClick={() => addScore(4)}>Four Score</button>
      <button onClick={() => addScore(6)}>Six Score</button>
      <button onClick={() => addScore(0)}>Out</button>
    </div>
  );
};

export default ScoreInAnOver;
