const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error()
    }

    let newArr = arr.concat()

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--double-next') {
            newArr[i] = newArr[i + 1]
        } else if (arr[i] === '--double-prev') {
            newArr[i] = newArr[i - 1]
        } else if (arr[i] === '--discard-next') {
            newArr[i] = newArr[i + 1] = undefined
        } else if (arr[i] === '--discard-prev') {
            newArr[i] = newArr[i - 1] = undefined
        }
    }

    return newArr.filter((item) => item !== undefined)

}
