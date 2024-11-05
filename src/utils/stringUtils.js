export function splitStrWithDelimiter(str, delimiter) {
  const arr = str.trim().split(delimiter);
  return arr.map((carName) => carName.trim());
}
