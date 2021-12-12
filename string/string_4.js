const isPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]+/gi, "").toUpperCase();
  const compare = str;
  return compare === str.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // => true
console.log(isPalindrome("race a car")); // => false
console.log(isPalindrome(".,")); // => false
