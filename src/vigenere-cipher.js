const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type) {
        this.type = type
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error()
        key = key.toUpperCase()
        let ab = []
        for (let i = 65; i < 91; i++) {
            ab.push(String.fromCodePoint(i))
        }
        console.log('1', message, key)
        while (message.length > key.length) key += key
        console.log('2', key)


    }

    decrypt() {
        if (message == undefined || key == undefined) throw new Error()

    }
}

module.exports = VigenereCipheringMachine;
