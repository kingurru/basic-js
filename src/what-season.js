const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) {
        return 'Unable to determine the time of year!'
    }
    if (!date.getTime()) {
        throw new Error()
    } else {
        const arrSeason = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']
        return arrSeason[date.getMonth()]
    }q

}

