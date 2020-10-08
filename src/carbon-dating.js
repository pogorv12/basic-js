const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //In case of wrong input parameter type or inadequate activity value or absence of argument function must return false.

  return Number(sampleActivity) > 0 && Number(sampleActivity) < MODERN_ACTIVITY && typeof(sampleActivity) === 'string' ? 
              Math.ceil(Math.log(Number(sampleActivity)/MODERN_ACTIVITY) / (-0.693) * HALF_LIFE_PERIOD) : false;

  
};
