const toggleCase = (str) =>
  str
    .split("")
    .map((s) => (/[A-Z]/g.test(s) ? s.toLowerCase() : s.toUpperCase()))
    .join("");

console.log(toggleCase("StuDY")); // => 'sTUdy'
