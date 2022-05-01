const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let toString = {}.toString;
  console.debug(date);
  if (date == undefined || !date) {
    console.log('Unable to determine the time of year!');
    //throw new Error('Unable to determine the time of year!');
    return 'Unable to determine the time of year!';
  } else
    if (!(toString.call(date) === '[object Date]') || date[Symbol.toStringTag] === 'Date') {
      throw new Error("Invalid date!");

    }
  let month = date.getMonth();

  console.debug('month = ', month);
  switch (month) {
    case 0: return 'winter'; break;
    case 1: return 'winter'; break;
    case 2: return 'spring'; break;
    case 3: return 'spring'; break;
    case 4: return 'spring'; break;
    case 5: return 'summer'; break;
    case 6: return 'summer'; break;
    case 7: return 'summer'; break;
    case 8: return 'autumn'; break;
    case 9: return 'autumn'; break;
    case 10: return 'autumn'; break;
    case 11: return 'winter'; break;
    default: return 'Invalid date!';
  }
}

module.exports = {
  getSeason
};
