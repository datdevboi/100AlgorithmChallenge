export function addTwoDigits(n: any): number {
  return n
    .toString()
    .split("")
    .reduce((x: any, y: any) => {
      return x + parseInt(y);
    }, 0);
}
