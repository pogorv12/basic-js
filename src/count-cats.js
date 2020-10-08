const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return (',' + backyard.toString() + ',').replace(/\^\,\^/g,'^,,^').split(',^^,').length-1;
};
