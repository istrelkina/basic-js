const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let arrResult = [];
  let isDiscardNext = false;
  let isDoubleNext = false;
  let isDeleted = false;
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  for (let i = 0; i < arr.length; i++) {
    if (!((arr[i] === '--double-prev' || arr[i] === '--discard-prev') && isDeleted)) isDeleted = false;
    if (arr[i] === '--discard-next') {
      isDiscardNext = true;
    } else
      if (arr[i] === '--discard-prev') {
        if (!isDeleted) {
          if (arrResult.length > 1) {
            arrResult.pop();
            isDeleted = true;
          }
        } else {
          isDeleted = false;
        }
      } else
        if (arr[i] === '--double-next') {
          isDoubleNext = true;
        } else
          if (arr[i] === '--double-prev') {
            if (!isDeleted) {
              if (i > 1) {
                arrResult.push(arr[i - 1]);
              };
            } else isDeleted = false;
          } else {
            if (!isDiscardNext) {
              arrResult.push(arr[i]);
            } else {
              isDeleted = true;
            };
            if (isDoubleNext) {
              arrResult.push(arr[i]);

            };
            isDiscardNext = false;
            isDoubleNext = false;
          }
  };
  return arrResult;
}

module.exports = {
  transform
};
