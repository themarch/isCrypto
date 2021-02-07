'use strict'

const User = require('./Modules/User')
const RedisWrite = require ('./Modules/RedisWrite')
const Tweet = require ('./Modules/Tweet')
const IsCrypto = require('./Modules/IsCrypto')

async function checkAndUpdate() {
    const redisWrite = new RedisWrite()
    const user = new User()
    const nbTweet = await user.getNumberOfTweet('44196397')
    if (!(await redisWrite.compareValue('NbTweet', nbTweet))) {
        return false
    }
    redisWrite.insertRedis('NbTweet', nbTweet)
    return true
}

async function tweetIsCrypto() {
    const tweet = new Tweet()
    const isCrypto = new IsCrypto()
    const lastTweet = await tweet.getLastTweet('44196397')
    try {
        const containWord = isCrypto.containCrypto(lastTweet)
        const isBitcoin = isCrypto.isBitcoin(containWord) 
        console.log(isBitcoin)
    } catch (e) {
        console.log(e)
    }
}

async function main() {

    const newTweet = await checkAndUpdate()
    if (!newTweet)
        return console.log('No new tweet')
    await tweetIsCrypto
    
}

main()

