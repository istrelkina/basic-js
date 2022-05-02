const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    //this.sum = 1;
  }
  calculateDepth(arr) {
    console.log(arr);

    const countTimesCalled = (count => () => ++count)(0);
    let flag = false;
    for (let element of arr) {
      if (Array.isArray(element)) flag = true;
    };
    if (!flag) {
      //console.log('count = ', count);
      return countTimesCalled();
    };
    arr = arr.flat();
    //count++;
    countTimesCalled();
    this.calculateDepth(arr);

  }
}


module.exports = {
  DepthCalculator
};
