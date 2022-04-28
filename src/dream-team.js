const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  function sortFn(a, b) {
    return a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
  }
  let result = '';
  let resultStr;
  console.log(members);
  if (members == '' || members === null || members === undefined) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) === 'string') {
      let newElement = members[i].replace(/\s+/g, '');
      if (newElement.charCodeAt(0) >= 65 && newElement.charCodeAt(0) <= 90 || newElement.charCodeAt(0) >= 97 && newElement.charCodeAt(0) <= 122) {

        result += newElement[0];
      };
    }
  };


  if (result === '' || !(typeof (result) === 'string')) {
    return false;
  } else {
    return result.split('').sort(sortFn).join('').toUpperCase();
  }
};


module.exports = {
  createDreamTeam
};
