const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1){
    let curDepth = depth;        
    arr.forEach(element => {
            let recDepth = 1;
            if (Array.isArray(element)){
                    recDepth = this.calculateDepth(element, depth + 1);
            } else {
                    recDepth = depth;    
            }
            curDepth = curDepth > recDepth ? curDepth : recDepth; 
    });
    return curDepth;
  }
};