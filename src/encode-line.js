const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strResult = '';
  let symbol = str[0];
  let count = 1;

  if (str == '') return '';

  for (let i = 1; i < str.length; i++) {
    if (str[i] == symbol) {
      count++;
    } else {

      if (count > 1) {
        strResult += count + symbol;
      } else {
        strResult += symbol;
      }
      symbol = str[i];
      count = 1;
    }
  }
  if (count > 1) {
    strResult += count + symbol;
  } else {
    strResult += symbol;
  }

  return strResult;
}

module.exports = {
  encodeLine
};
