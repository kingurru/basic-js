const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false
  let newArr = []
  for (let i of arr) {
    if (typeof i === 'string' && i !== '' && typeof i !== 'number' && Number.isNaN(+i)) {
      i = i.trim()
      newArr.push(i[0].toUpperCase())
    }
  }
  newArr = newArr.sort().join('')
  return newArr
}
