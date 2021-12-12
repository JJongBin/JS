const getDay = (date) => {
  const day = new Date(date).getDay();

  if (day === 0) return "일요일";
  else if (day === 1) return "월요일";
  else if (day === 2) return "화요일";
  else if (day === 3) return "수요일";
  else if (day === 4) return "목요일";
  else if (day === 5) return "금요일";
  else if (day === 6) return "토요일";
};

console.log(getDay("2021-07-24")); // => '토요일'
console.log(getDay("2021-07-25")); // => '일요일'
console.log(getDay("2021-07-26")); // => '월요일'
