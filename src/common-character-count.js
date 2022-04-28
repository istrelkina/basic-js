const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let symbol = '';
  let symbCount1 = 0;
  let symbCount2 = 0;
  let count = 0;

  console.log(s1, '   ', s2);

  for (let i = 97; i <= 122; i++) {
    symbol = String.fromCharCode(i);
    symbCount1 = s1.split(symbol).length - 1;
    symbCount2 = s2.split(symbol).length - 1;

    if (symbCount1 <= symbCount2) {
      count += symbCount1;
    } else {
      count += symbCount2;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
