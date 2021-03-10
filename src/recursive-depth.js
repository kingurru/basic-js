const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    calculateDepth(arr, level = 1) {
        let newArr = arr.filter(item => Array.isArray(item))
        if (newArr.length) {
            return this.calculateDepth(newArr.flat(), ++level)
        } else return level
    }
}