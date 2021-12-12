const isEqualDate = (date, dateCompare) =>
  date2.getTime() === dateCompare.getTime();

console.log(isEqualDate(new Date("2021/07/24"), new Date("2021/07/24"))); // => true
console.log(isEqualDate(new Date("2021/07/24"), new Date("2022/07/2"))); // => false
