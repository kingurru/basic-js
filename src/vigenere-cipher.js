const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type) {
        this.type = type
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error()

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

        if (this.type === false) str = str.split('').reverse().join('')

        return str
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error()

        message = message.toUpperCase()
        key = key.toUpperCase()
        let ab = []
        let matrix = []
        let str = ''

        for (let i = 65; i < 91; i++) {
            ab.push(String.fromCodePoint(i))
        }

        for (let i = 0; i <= ab.length; i++) {
            matrix[i] = ab.slice(i).concat(ab.slice(0, i));
        }

        while (key.length < message.length) {
            key += key
        }
        let j = 0
        for (let i = 0; i < message.length; i++) {
            if (ab.indexOf(message[i]) < 0) str += message[i]

            else {
                if (ab.indexOf(key[j]) === 0) {
                    str += matrix[ab.indexOf(message[i])][0]
                    j++
                } else {
                    str += matrix[ab.indexOf(message[i])][26 - ab.indexOf(key[j++])]

                }
            }
        }

        if (this.type === false) str = str.split('').reverse().join('')

        return str
    }
}

module.exports = VigenereCipheringMachine;
