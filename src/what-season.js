const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(theDate) {

  if (theDate === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (typeof(theDate.getMonth) !== 'function') {
    throw 'Error';
  }

  if (Date.prototype.toString.call(theDate) === 'Invalid Date') {
    throw 'Error';
  }
  
  return theDate === undefined ? 'Unable to determine the time of year!' :
        theDate.getMonth() <= 1 || theDate.getMonth() === 11 ? 'winter' :
        theDate.getMonth() <= 4 ? 'spring' :
        theDate.getMonth() <= 7 ? 'summer' : 'autumn';
  
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
