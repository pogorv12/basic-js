const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  return Array.isArray(members) === true ? 
              members.map((theValue) => typeof(theValue) === 'string' ? 
                      theValue.trim().charAt(0).toUpperCase()  : '').sort().join('') : false;
};
