const  range  = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(num) {
  return range.range (2, num+1, 2);
  // TODO
}

module.exports = getListMultiplesOfTwo;