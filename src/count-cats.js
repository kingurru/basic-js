const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    matrix = matrix.flat(1)
    let count = 0;
    matrix.forEach(item => {
        if (item === '^^') count++
    })
   return count
}
