import { useState } from "react";
import { presidents } from "../data/presidents"


export function usePresidentGame() {
  const [guess, setGuess] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const [loserText, setLoserText] = useState<string>("");

  const handleGuess = () => {
    if (guess.trim().toLowerCase() === presidents[index].toLowerCase()) {
      setScore(score + 1);
      if (index + 1 < presidents.length) {
        setIndex(index + 1);
      } else {
        setFinished(true);
      }
    } else {
      setLoserText(
        `Wrong! The correct answer was: ${presidents[index]}. You guessed ${guess} like a big dummy`
      );
      setFinished(true);
    }
    setGuess("");
  };

  const restartGame = () => {
    setGuess("");
    setIndex(0);
    setScore(0);
    setFinished(false);
    setLoserText("");
  };

  return {
    guess,
    setGuess,
    index,
    score,
    finished,
    loserText,
    handleGuess,
    restartGame,
    presidents,
  };
}