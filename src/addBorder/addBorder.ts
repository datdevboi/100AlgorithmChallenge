export function addBorder(picture: string[]): string[] {
  const sizeofWall = picture[0].length + 2;
  const wall = "*".repeat(sizeofWall);

  const withWall = picture.map(str => {
    return `*${str}*`;
  });

  withWall.unshift(wall);
  withWall.push(wall);

  return withWall;
}
