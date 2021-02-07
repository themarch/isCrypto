const crypto = ['btc', 'bitcoin', 'ethereum', 'eth', 'ripple', 'litecoin', 'ltc', 'finally', 'this']

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
        const bitcoinWord = ['btc', 'bitcoin', 'finally']
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

    isLitecoin(wordMatch) {
        var hasMatch = 0;
        const litecoinWord = ['ltc', 'litecoin', 'this']
        litecoinWord.forEach(elementMatch => {
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

    whichCrypto(wordMatch) {
        const isLitecoin = this.isLitecoin(wordMatch)
        const isBitcoin = this.isBitcoin(wordMatch)
        const isEthereum = this.isEthereum(wordMatch)
        return {
            isLitecoin: isLitecoin,
            isBitcoin: isBitcoin,
            isEthereum: isEthereum
        }
    }

}

module.exports = IsCrypto