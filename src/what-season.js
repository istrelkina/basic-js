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
  //console.log(date);
  if (date === '' || date === null || date == undefined) {
    return 'Unable to determine the time of year!';
    console.log('Unable to determine the time of year!');
  }
  if (!date instanceof Date) {
    //console.log('Invalid date!');
    return 'Invalid date!';
    //throw new Error("Invalid date!");
    return;
  }
  let month = date.getMonth();

  //console.log(month);
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
    default: return 'Dont know';
  }
}

module.exports = {
  getSeason
};
