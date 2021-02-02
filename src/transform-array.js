const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '--discard-next'){
            arr[i+1] = ''
        }
        if(arr[i] === '--discard-prev'){
            arr[i-1] = ''
        }
        if(arr[i] === '--double-next'){
            arr[i] = arr[i+1]
        }
        if(arr[i] === '--double-prev'){
            arr[i] = arr[i-1]
        }
    }
    return arr.filter(number => typeof number === 'number')
};
