const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push(' ');
    } else {
      this.arr.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.arr.length) {
      let result = this.arr.filter((element, index) => index != position - 1);
      this.arr = result;
    } else {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    };
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join('~~');
    this.arr = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
