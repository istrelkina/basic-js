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
  let arrResult = arr;
  let isDiscardNext = false;
  //const isDiscardPrev = false;
  let isDoubleNext = false;
  //const isDoublePrev = false;
  if (typeof (arr) != 'Array') return "'arr' parameter must be an instance of the Array!";
  console.log(arr);

  // arr.forEach((element, index, array) => {
  //   if (typeof (element) === 'string') {
  //     if (element === '--discard-next') {
  //       isDiscardNext = true;
  //     };
  //     if (element === '--discard-prev') {
  //       if (arrResult.length > 1) {
  //         arrResult.pop();
  //       }
  //     };
  //     if (element === '--double-next') {
  //       isDoubleNext = true;
  //     };
  //     if (element === '--double-prev') {
  //       arrResult.push(array[index - 1]);
  //     };
  //   } else {
  //     if (!isDiscardNext) {
  //       arrResult.push(element);
  //     };
  //     if (isDoubleNext) {
  //       arrResult.push(element);

  //     };
  //     isDiscardNext = false;
  //     isDoubleNext = false;
  //   }
  // })
  let transform = arrResult => arrResult.flatMap((elem, index, array) => {
    if (array[index + 1] === '--discard-prev') return [];
    if (array[index - 1] === '--double-next') return [elem, elem];
    if (array[index + 1] === '--double-prev') return [elem, elem];

    if (elem.toString().startsWith('--d')) return [];

    return elem;
  });

  return transform(arr);
}

module.exports = {
  transform
};
