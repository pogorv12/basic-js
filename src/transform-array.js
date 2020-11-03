const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let i = 0;

  const arrFunc = (arr, i = 0) => {
          let newArr = [];
          switch (arr[i]) {
                  case '--discard-next':
                          arr[i] = '--discarded';
                          if (i < arr.length) {
                                  arr[i + 1] = '--discarded';
                          }
                          break;
                  case '--discard-prev':
                          arr[i] = '--discarded';
                          if (i > 0) {
                                  arr[i - 1] = '--discarded';
                          }
                          break;
                  case '--double-next':
                          if (i < arr.length - 1) {
                                  arr[i] = arr[i + 1];
                          } else {
                                  arr[i] = '--discarded';
                          }
                          break;
                  case '--double-prev':
                          if (i > 0) {
                                  arr[i] = arr[i - 1];
                          } else {
                                  arr[i] = '--discarded';                                
                          }
                          break;
                  default:
          }
          if (i < arr.length - 1) {
                  newArr = arrFunc(arr, i + 1);
          } 
          
          if (arr[i] !== '--discarded' ) {
                  newArr.unshift(arr[i]);
          }
          return newArr      
  }

  if (Array.isArray(arr) === false) {
    throw new new Error('Not an array');
  }

  if (arr.length === 0) {
    return arr;
  }

  return arrFunc(arr.slice(0));

};
