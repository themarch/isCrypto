const crypto = ['btc', 'bitcoin', 'ethereum', 'eth', 'ripple', 'litecoin', 'ltc', 'doge', 'dogecoin', 'orn', 'orion']

class IsCrypto {
    constructor() {
    }

    /**
     * Return wordMatch if text contains crypto
     * @param  {string} text
     */
    containCrypto(text) {
        let wordMatch = []
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
        let hasMatch = 0;
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
        let hasMatch = 0;
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
        let hasMatch = 0;
        const litecoinWord = ['ltc', 'litecoin']
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
    
    
    isDoge(wordMatch) {
        let hasMatch = 0;
        const dogeWord = ['doge', 'dogecoin']
        dogeWord.forEach(elementMatch => {
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
    
    isOrn(wordMatch) {
        let hasMatch = 0;
        const ornWord = ['orn', 'orion']
        ornWord.forEach(elementMatch => {
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
        const isDoge = this.isDoge(wordMatch)
        const isOrn = this.isOrn(wordMatch)

        return {
            isLitecoin: isLitecoin,
            isBitcoin: isBitcoin,
            isEthereum: isEthereum,
            isDoge: isDoge,
            isOrn: isOrn,
        }
    }

}

module.exports = IsCrypto
