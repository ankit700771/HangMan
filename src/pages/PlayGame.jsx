import { Link, useLocation } from "react-router-dom";
import MaskedText from "../Components/MaskedText/MaskedText";
import LetterButton from "../Components/LetterButton/LetterButton";
import { useState } from "react";
import Hangman from "../Components/Hangman/Hangman";

function PlayGame() {
  const { state } = useLocation();

  const [gussedLatters, setGussedLetters] = useState([]);
  const [step, setStep] = useState(0);

  function HandleLetterClick(letter) {
    if (state.wordSelected.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      setStep(step + 1);
    }

    setGussedLetters([...gussedLatters, letter]);
  }

  return (
    <>
      <div className="mb-3">
        <MaskedText text={state.wordSelected} gussedLatters={gussedLatters} />
      </div>
      <div className="flex">
        <div className="w-[500px] mb-3">
          <LetterButton
            text={state.wordSelected}
            gussedLatters={gussedLatters}
            onLatterClick={HandleLetterClick}
          />
        </div>
        <div>
          <Hangman step={step} />
        </div>
      </div>
      <Link to="/">
        <span className="border py-2 px-6 bg-red-500 text-white rounded-md">
          Start New Game
        </span>
      </Link>
    </>
  );
}

export default PlayGame;
