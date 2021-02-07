const needle = require('needle');
const Connect = require ('./Connect')

class Tweet extends Connect {
    constructor() {
        super()
    }

    /**
     * Get text of last tweet with userId
     * @param  {string} userId
     */
    async getLastTweet(userId) {
        const endpointUrl = `https://api.twitter.com/2/users/${userId}/tweets`;
        const params = {
            "max_results": 5,
        }
        const result = await needle('get', endpointUrl, params, {
            headers: this.header
        })
        return result.body.data[0].text.toLowerCase()
    }

}

module.exports = Tweet