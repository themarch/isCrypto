const needle = require('needle');
const Connect = require ('./Connect')

class User extends Connect {
    constructor() {
        super()
    }

    /**
     * Get userId with username
     * @param  {string} username
     */
    async getIdByUsername(username) {
        const endpointUrl =  "https://api.twitter.com/2/users/by?usernames="
        const params = {
            usernames: username, // Edit usernames to look up
        }
        const result = await needle('get', endpointUrl, params, {
            headers: this.header
        })
        return result.body.data[0].id
    }
    /**
     * Get user informations with username
     * @param  {string} username
     */
    async getUserByUsername(username) {
        const endpointUrl =  "https://api.twitter.com/2/users/by?usernames="
        const params = {
            usernames: username, // Edit usernames to look up
        }
        const result = await needle('get', endpointUrl, params, {
            headers: this.header
        })
        return result.body
    }
    /**
     * Get number of tweet with id
     * @param  {string} id
     */
    async getNumberOfTweet(id) {
        const endpointUrl =  `https://api.twitter.com/2/users/${id}`
        const params = {
            "user.fields": "public_metrics"
        }
        const result = await needle('get', endpointUrl, params, {
            headers: this.header
        })
        return result.body.data.public_metrics.tweet_count
    }
}

module.exports = User