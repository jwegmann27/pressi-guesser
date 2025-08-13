import React, { useState } from "react";
const presidents = [
  "George Washington",
  "John Adams",
  "Thomas Jefferson",
  "James Madison",
  "James Monroe",
  "John Quincy Adams",
  "Andrew Jackson",
  "Martin Van Buren",
  "William Henry Harrison",
  "John Tyler",
  "James K. Polk",
  "Zachary Taylor",
  "Millard Fillmore",
  "Franklin Pierce",
  "James Buchanan",
  "Abraham Lincoln",
  "Andrew Johnson",
  "Ulysses S. Grant",
  "Rutherford B. Hayes",
  "James A. Garfield",
  "Chester A. Arthur",
  "Grover Cleveland",
  "Benjamin Harrison",
  "Grover Cleveland",
  "William McKinley",
  "Theodore Roosevelt",
  "William Howard Taft",
  "Woodrow Wilson",
  "Warren G. Harding",
  "Calvin Coolidge",
  "Herbert Hoover",
  "Franklin D. Roosevelt",
  "Harry S. Truman",
  "Dwight D. Eisenhower",
  "John F. Kennedy",
  "Lyndon B. Johnson",
  "Richard Nixon",
  "Gerald Ford",
  "Jimmy Carter",
  "Ronald Reagan",
  "George H. W. Bush",
  "Bill Clinton",
  "George W. Bush",
  "Barack Obama",
  "Donald Trump",
  "Joe Biden",
  "Donald Trump",
];
const PresidentTimeline: React.FC = () => {
  const [guess, setGuess] = useState("");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleGuess = () => {
    if (guess.trim().toLowerCase() === presidents[index].toLowerCase()) {
      setScore(score + 1);
      if (index + 1 < presidents.length) {
        setIndex(index + 1);
      } else {
        setFinished(true);
      }
    } else {
      alert(`Wrong! The correct answer was: ${presidents[index]}`);
      setFinished(true);
    }
    setGuess("");
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Guess the Presidents in Order</h1>
      {finished ? (
        <div>
          <p className="text-lg font-semibold">Game Over!</p>
          <p>
            Your Score: {score} / {presidents.length}
          </p>
        </div>
      ) : (
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
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default PresidentTimeline;
