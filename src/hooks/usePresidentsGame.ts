import { useEffect, useState } from "react";
// import { presidents } from "../data/presidents";

export function usePresidentGame() {
  const [guess, setGuess] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const [loserText, setLoserText] = useState<string>("");
  const [presidents, setPresidents] = useState<
    {
      id: number;
      ordinal: number;
      name: string;
      yearsInOffice: string;
      vicePresidents: [string];
      photo: string;
    }[]
  >([]);

  useEffect(() => {
    getPresidents();
  }, []);

  const getPresidents = async () => {
    try {
      const resp = await fetch(
        "https://api.sampleapis.com/presidents/presidents"
      );
      const json = await resp.json();
      setPresidents(json);
      console.log(json);
      //   console.log(presidents[0].name);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log(String(err));
      }
    }
  };

  const handleGuess = () => {
    let currentPresidentName = presidents[index].name;
    console.log("curr: ", currentPresidentName);
    if (guess.trim().toLowerCase() === currentPresidentName.toLowerCase()) {
      setScore(score + 1);
      if (index + 1 < presidents.length) {
        setIndex(index + 1);
      } else {
        setFinished(true);
      }
    } else {
      setLoserText(
        `Wrong! The correct answer was: ${currentPresidentName}. You guessed ${guess} like a big dummy`
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
