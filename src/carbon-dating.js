const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity !== 'string' || !Number(sampleActivity)){
        return false
    }
    let k = 0.693 / HALF_LIFE_PERIOD
    let N0 = MODERN_ACTIVITY / k
    let N = Number(sampleActivity) * N0 / MODERN_ACTIVITY
    let t = Math.log(N0/N) / k
    return Math.floor(t)
};
