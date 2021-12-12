const count = (str, strCnt) => str.match(new RegExp(strCnt, "gi")).length;

console.log(count("COMPUTERPROGRAMMING", "R")); // => 3
