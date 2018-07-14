function alphabeticShift(inputString: string): string {
  const alphabet: { [atr: string]: string } = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "y",
    y: "z",
    z: "a"
  };
  let inputShifted = inputString.split("");

  return inputShifted
    .map((str: string) => {
      return alphabet[str];
    })
    .join();
}

console.log(alphabeticShift("crazy"));
