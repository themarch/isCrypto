const needle = require('needle');
const crypto = ['btc', 'bitcoin', 'ethereum', 'eth', 'ripple', 'litecoin', 'ltc', 'finally']

class IsCrypto {
    constructor() {
    }

    /**
     * Return wordMatch if text contains crypto
     * @param  {string} text
     */
    containCrypto(text) {
        var wordMatch = []
        crypto.forEach(element => {
            if (text.includes(element)) {
                wordMatch.push(element)
            }
        })
        if (wordMatch.length == 0)
            throw ('No match for this word');
        return (wordMatch)
    }

    isBitcoin(wordMatch) {
        var hasMatch = 0;
        const bitcoinWord = ['btc', 'bitcoin']
        bitcoinWord.forEach(elementMatch => {
            wordMatch.forEach(elementWord => {
                if (elementMatch == elementWord) {
                    hasMatch = 1;
                }
            })
        })
        if (hasMatch === 0)
            return false
        return true
    }

    isEthereum(wordMatch) {
        var hasMatch = 0;
        const ethereumWord = ['eth', 'ethereum']
        ethereumWord.forEach(elementMatch => {
            wordMatch.forEach(elementWord => {
                if (elementMatch == elementWord) {
                    hasMatch = 1;
                }
            })
        })
        if (hasMatch === 0)
            return false
        return true
    }

}

module.exports = IsCrypto