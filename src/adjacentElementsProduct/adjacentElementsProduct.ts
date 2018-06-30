export function adjacentElementsProduct(inputArray: number[]): number {
  let maxNumber = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (product > maxNumber) {
      maxNumber = product;
    }
  }

  return maxNumber;
}
