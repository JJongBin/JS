const getFirstDayOfMonth = (year, month) => {
  const date = new Date(year, month);
  date.setTime(date.getTime() + 32400000);

  return date.getDay();
};

// 2021년 1월 1일은 금요일
console.log(getFirstDayOfMonth(2021, 0)); // => 5

// 2021년 12월 1일은 수요일
console.log(getFirstDayOfMonth(2021, 11)); // => 3
