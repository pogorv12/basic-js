function func(str, options){

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
}

console.log(func(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));
//nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null
//nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null
