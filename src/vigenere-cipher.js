const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(isDirect = true){
        this.direct = isDirect
    }
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    encrypt(message , key) {
        if(!message || !key){
            throw new Error('Missing argument!')
        }
      let plainTextArray = message.toUpperCase().split('')
      let keyArray = []
      let result = []
      let keyArrayNativeLength = key.length
      let k = key.length
      while(keyArray.length !== plainTextArray.length){
        let keyIndex = k % keyArrayNativeLength
        if(this.alphabet.indexOf(plainTextArray[keyArray.length]) !== -1){
            keyArray.push(key[keyIndex].toUpperCase())
            k++
        }
        else {
            keyArray.push(plainTextArray[keyArray.length])
        }
      }
      for(let i = 0; i < plainTextArray.length; i++){
          if(this.alphabet.split('').indexOf(plainTextArray[i]) !== -1){
            let resultIndex = this.alphabet.indexOf(plainTextArray[i]) + this.alphabet.indexOf(keyArray[i])
            if(resultIndex < 26){
                result.push(this.alphabet[resultIndex])
            }
            else{
                result.push(this.alphabet[resultIndex-26])
            }
          }
          else{
              result.push(plainTextArray[i])
          }
      }
      return this.direct ? result.join('') : result.reverse().join('')
    }    
    decrypt(encryptedMessage , key) {
        if(!encryptedMessage || !key){
            throw new Error('Missing argument!')
        }
        let plainTextArray = encryptedMessage.toUpperCase().split('')
        let keyArray = []
        let result = []
        let keyArrayNativeLength = key.length
        let k = key.length
        while(keyArray.length !== plainTextArray.length){
          let keyIndex = k % keyArrayNativeLength
          if(this.alphabet.indexOf(plainTextArray[keyArray.length]) !== -1){
              keyArray.push(key[keyIndex].toUpperCase())
              k++
          }
          else {
              keyArray.push(plainTextArray[keyArray.length])
          }
        }
        for(let i = 0; i < plainTextArray.length; i++){
            if(this.alphabet.split('').indexOf(plainTextArray[i]) !== -1){
              let resultIndex = this.alphabet.indexOf(plainTextArray[i]) - this.alphabet.indexOf(keyArray[i])
              if(resultIndex >= 0){
                  result.push(this.alphabet[resultIndex])
              }
              else{
                  result.push(this.alphabet[26 + resultIndex])
              }
            }
            else{
                result.push(plainTextArray[i])
            }
        }
        return this.direct ? result.join('') : result.reverse().join('')
    }
  }

module.exports = VigenereCipheringMachine;
