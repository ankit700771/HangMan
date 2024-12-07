const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
function LetterButton({ text, gussedLatters, onLatterClick }) {
  const originalLetters = new Set(text.toUpperCase().split(""));
  const gussedLattersSet = new Set(gussedLatters);

  const buttonStyle = function (letter) {
    if (gussedLattersSet.has(letter)) {
      return `${originalLetters.has(letter) ? "bg-green-500" : "bg-red-500"}`;
    } else {
      return "bg-blue-500";
    }
  };

  function HandleLetterClick(event) {
    const charoftheLetter = event.target.value;
    onLatterClick?.(charoftheLetter);
  }

  const buttons = ALPHABETS.map((letter, idx) => {
    return (
      <button
        key={idx}
        value={letter}
        onClick={HandleLetterClick}
        disabled={gussedLattersSet.has(letter)}
        className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
      >
        {letter}
      </button>
    );
  });

  return <>{buttons}</>;
}

export default LetterButton;
