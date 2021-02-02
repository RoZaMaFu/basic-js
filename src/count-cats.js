const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let result = 0
    matrix.map(yard => {
        yard.map(stuff => {
            if(stuff === '^^'){
                result++
            }
            return stuff
        })
        return yard
    })
    return result
};
