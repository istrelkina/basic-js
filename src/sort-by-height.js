const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  function compareNumbers(a, b) {
    return a - b;
  }
  let arrSort = [];
  let arrDop = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSort.push(arr[i]);
    arrDop.push(arr[i]);
  }
  arrSort = arrSort.sort(compareNumbers);
  j = arrSort.lastIndexOf(-1) + 1;
  arr = [];

  for (let i = 0; i < arrDop.length; i++) {
    if (arrDop[i] === -1) {
      arr.push(-1);
    } else {

      arr.push(arrSort[j]);
      j++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
