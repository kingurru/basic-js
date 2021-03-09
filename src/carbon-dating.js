const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sample) {
    if (typeof sample !== 'string') return false;

    sample = +sample
    let k = 0.693 / HALF_LIFE_PERIOD
    let t12 = Math.log(MODERN_ACTIVITY / sample)
    let time = t12 / k

    if (arguments.length === 0 || isNaN(sample) || (sample < 1 || sample > MODERN_ACTIVITY)) return false;

    return Math.ceil(time);
};