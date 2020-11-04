const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options){
        const repeatTimes = options.repeatTimes > 0 ? options.repeatTimes : 0;
        const additionRepeatTimes = options.additionRepeatTimes > 0 ? options.additionRepeatTimes : 0;
        const separator = options.separator ? options.separator : '+';
        const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
        const addition = typeof options.addition === 'undefined' ? '' : options.addition + '';
        
        let additionText = addition;

        for (let i = 1; i < additionRepeatTimes; i++){
                additionText += additionSeparator + addition;
        }

        str = str + '' + additionText;
        let repeatText = str;

        for (let i = 1; i < repeatTimes; i++){
                repeatText += separator + str;
        }
        return repeatText;
};
  