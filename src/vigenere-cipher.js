const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type) {
        this.type = type
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error()
        key = key.toUpperCase()

        let ab = []
        let matrix = []
        let str = ''

        for (let i = 65; i < 91; i++) {
            ab.push(String.fromCodePoint(i))
        }

        for (let i = 0; i < ab.length; i++) {
            matrix[i] = ab.slice(i).concat(ab.slice(0, i));
        }

        for (let i = 0; i < message.length; i++) {
           str += matrix[indexOf(ab.message[i])][indexOf(key[i])]
        }
        console.log(str)
    }

    decrypt() {
        if (message == undefined || key == undefined) throw new Error()

    }
}

module.exports = VigenereCipheringMachine;
