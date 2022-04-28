const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n + '';
  let min = str[0];
  let index = 0;
  let resultStr = '';
  console.log('n = ', n);
  for (let i = 1; i < str.length; i++) {
    console.log(i);
    console.log(str[i]);
    if (str[i] > min) {
      // console.log(str.substring(0, i - 1));
      for (let j = 0; j < str.length; j++)
        if (!(j === index)) {
          resultStr += str[j];
        }
      console.log('result = ', resultStr);
      return parseInt(resultStr, 10);
    } else {
      min = str[i];
      index = i;
    }
  }
  for (let j = 0; j < str.length; j++)
    if (!(j === index)) {
      resultStr += str[j];
    }
  console.log('result = ', resultStr);
  return parseInt(resultStr, 10);
}

module.exports = {
  deleteDigit
};
