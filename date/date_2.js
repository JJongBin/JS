const day = ['일', '월', '화', '수', '목', '금', '토'];
const getDay = date => day[new Date(date).getDay()] + '요일';

console.log(getDay('2021-07-24')); // => '토요일'
console.log(getDay('2021-07-25')); // => '일요일'
console.log(getDay('2021-07-26')); // => '월요일'
