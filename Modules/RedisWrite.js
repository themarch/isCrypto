const redis = require("redis");
const client = redis.createClient();

class RedisWrite {
    constructor() {
    }

    /**
     * Add some data for precise key in Redis
     * @param  {string} key
     * @param  {string} value
     */
    async insertRedis(key, value) {
        client.set(key, value, function(err, reply) {
            console.log('Value updated')
        })
        client.quit()
    }

    /**
     * Read data from key
     * @param  {string} key
     */
    async readRedis(key) {
        return new Promise((resolve, reject) => { 
            client.get(key, function (err, result) {
                resolve(result)
            })
            client.quit()
        })
    }

    /**
     * Compare data from key with a value
     * @param  {string} key
     * @param  {string} value
     */
    async compareValue(key, value) {
        const valueInital = await this.readRedis(key)
        client.quit()
        if (valueInital != value)
            return false
        return true
    }
    
}

module.exports = RedisWrite