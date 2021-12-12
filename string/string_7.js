const compress = str =>
  str
    .replace(/([A-Z])(\1*)/gi, `$& `)
    .trim()
    .split(' ')
    .map(s => (s.length > 1 ? s[0] + `${s.length}` : s))
    .join('');

console.log(compress('ABBCCCE')); // => AB2C3E
