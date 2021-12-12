const diffDays = (date, date2) =>
  Math.abs(date.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);

console.log(diffDays(new Date("2021/01/01"), new Date("2021/12/31"))); // => 364
