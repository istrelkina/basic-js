const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let objResult = {};
  let domain = '';
  let numCount = 0;
  let count = 0;

  domains.forEach((element) => {
    if (element.split('.').length > numCount) numCount = element.split('.').length;
  });

  let arrNew = domains.map(element => {
    let newEl = element.split('.').reverse().join('.');
    return '.'.concat(newEl);

  });

  for (let num = 0; num < numCount; num++) {
    count = 0;

    arrNew.forEach((element, index) => {
      let indexDot = element.length;
      let indexNum = 0;
      for (let i = 0; i < element.length; i++) {
        if (element[i] == '.') indexNum++;
        if (indexNum === num + 1) indexDot = i;
      };
      if (indexDot === element.length) return objResult;

      domain = element.substring(0, indexDot + 1);
      count++;
    });
    objResult[domain] = count;
  }

  return objResult;
}

module.exports = {
  getDNSStats
};
