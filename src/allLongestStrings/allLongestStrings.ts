export function allLongestStrings(inputArray: string[]): string[] {
  const maxLength = longestStringInArray(inputArray);

  return inputArray.filter(x => x.length === maxLength);
}
function longestStringInArray(inputArray: string[]): number {
  let longestStringLength = 0;

  inputArray.forEach(x => {
    if (x.length > longestStringLength) {
      longestStringLength = x.length;
    }
  });

  return longestStringLength;
}
