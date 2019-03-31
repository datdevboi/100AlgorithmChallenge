export function almostIncreasingSequence(sequence: any[]): boolean {
  let count = 0;
  sequence.reduce((prev, current) => {
    if (current < prev) {
      count++;
      return prev;
    }

    return current;
  });

  return count > 1 ? false : true;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1]))
// console.log(almostIncreasingSequence([1, 3, 2]))
