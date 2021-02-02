const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let monthNumber = 0
    try {
        monthNumber = date.getMonth()
    }
    catch(e){
        throw new Error(e)
    }
    let currentSeason = 0
    let seasons = [
        ['winter', 0, 1, 11],
        ['spring', 2, 3, 4],
        ['summer', 5, 6, 7],
        ['fall', 8, 9, 10],
    ]
    seasons.map(season => {
        if(season.indexOf(monthNumber) !== -1){
            currentSeason = season[0]
        }
    })
    if(currentSeason){
        return currentSeason
    }
    return 'Unable to determine the time of year!'
};
