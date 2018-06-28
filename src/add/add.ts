export function add(...numbers: number[]): number {
  return numbers.reduce((x, y) => {
    return x + y;
  }, 0);
}
