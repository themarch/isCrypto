'use strict'

const User = require('./Modules/Twitter/User')
const RedisWrite = require ('./Modules/Twitter/RedisWrite')
const Tweet = require ('./Modules/Twitter/Tweet')
const IsCrypto = require('./Modules/Twitter/IsCrypto')

async function checkAndUpdate() {
    const redisWrite = new RedisWrite()
    const user = new User()
    const nbTweet = await user.getNumberOfTweet('44196397')
    if (await redisWrite.compareValue('NbTweet', nbTweet)) {
        redisWrite.redisClose()
        return false
    }
    redisWrite.insertRedis('NbTweet', nbTweet)
    redisWrite.redisClose()
    return true
}

async function tweetIsCrypto() {
    const tweet = new Tweet()
    const isCrypto = new IsCrypto()
    const lastTweet = await tweet.getLastTweet('44196397')
    try {
        const containWord = isCrypto.containCrypto(lastTweet)
        const whichCrypto = isCrypto.whichCrypto(containWord) 
        console.log(whichCrypto)
    } catch (e) {
        console.log(e)
    }
}

async function main() {
    const newTweet = await checkAndUpdate()
    if (!newTweet)
        return console.log('No new tweet')
    tweetIsCrypto()    
}

main()

