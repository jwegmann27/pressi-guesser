import React from "react";
import { usePresidentGame } from "../hooks/usePresidentsGame";

const PresidentTimeline: React.FC = () => {
  const {
    guess,
    setGuess,
    index,
    score,
    finished,
    loserText,
    handleGuess,
    restartGame,
    presidents,
  } = usePresidentGame();

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Guess the Presidents in Order</h1>
      <div>
        <div>
          <p className="mb-2">Guess president #{index + 1}:</p>
          <input
            className="border p-2 rounded w-full mb-2"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGuess()}
            placeholder="Enter full name"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleGuess}
            disabled={finished}
          >
            Submit
          </button>
          <button onClick={restartGame}>Restart</button>
        </div>
        <div>
          <ol>
            {presidents.slice(0, index).map((president, i) => (
              <li key={president.id}>{president.name}</li>
            ))}
          </ol>
        </div>
      </div>
      {finished && (
        <div>
          <p className="text-lg font-semibold">Game Over!</p>
          <p>
            Your Score: {score} / {presidents.length}
          </p>
          <p>{loserText}</p>
        </div>
      )}
    </div>
  );
};

export default PresidentTimeline;
