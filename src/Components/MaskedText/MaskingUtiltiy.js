export function getMaskedString(orignalWord, gussedLatters) {
  gussedLatters = gussedLatters.map((letter) => letter.toUpperCase());
  const gussedLatterSet = new Set(gussedLatters);

  const result = orignalWord
    .toUpperCase()
    .split("")
    .map((char) => {
      if (gussedLatterSet.has(char)) {
        return char;
      } else {
        return "_";
      }
    });

  return result;
}
