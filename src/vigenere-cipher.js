const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type) {
        this.type = type
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error()
        console.log('1 key:', key, 'message:', message)
        message = message.toUpperCase()
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

        while (key.length < message.length) {
            key += key
        }
        let j = 0
        for (let i = 0; i < message.length; i++) {
            if (ab.indexOf(message[i]) < 0) str += message[i]
            else str += matrix[ab.indexOf(message[i])][ab.indexOf(key[j++])]
        }
        return str
    }

    decrypt() {
        if (message === undefined || key === undefined) throw new Error()

    }
}

module.exports = VigenereCipheringMachine;
