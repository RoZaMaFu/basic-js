const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let firstLetters = []
    members.map(member => {
        if(typeof member === 'string'){
            firstLetters.push(member.trim()[0].toUpperCase())
        }
        return member
    })
    return firstLetters.sort().join('')
};
