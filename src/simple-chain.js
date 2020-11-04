const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  arr: [],
      
  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)){
      this.arr = [];
      throw Error ('Position is incorect');
    }
    if (position >= this.arr.length){
          this.arr = [];
          throw Error ('Position not exist');
    }
    this.arr.splice(position - 1,1);
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    this.arrReturn = this.arr.reduce((prev, cur) => `${prev}~~( ${cur} )`,'').slice(2);
    this.arr = [];
    return this.arrReturn;
  }
};

module.exports = chainMaker;
