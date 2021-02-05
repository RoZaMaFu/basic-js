const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let result = []
    for(let i = 0; i < options.repeatTimes; i++){
        result.push(str)
        for(let j = 0; j < options.additionRepeatTimes; j++){
            if(options.addition){
                result.push(options.addition)
            }
            if(options.additionSeparator && j !== options.additionRepeatTimes - 1){
                result.push(options.additionSeparator)
            }
        }
        if(options.separator && i !== options.repeatTimes - 1){
            result.push(options.separator)
        }
    }
    return result.join('')
};
  
