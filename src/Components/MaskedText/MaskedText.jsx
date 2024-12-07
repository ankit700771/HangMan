import { getMaskedString } from "./MaskingUtiltiy";
import { useState } from "react";
function MaskedText({ text, gussedLatters }) {
  const maskedString = getMaskedString(text, gussedLatters);

  return (
    <>
      {maskedString.map((letter, idx) => {
        return (
          <span className="mx-1" key={idx}>
            {letter}
          </span>
        );
      })}
    </>
  );
}

export default MaskedText;
