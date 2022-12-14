require('dotenv').config()

const Twit = require('twit')

const client = new Twit({
    consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
    access_token: process.env.TWITTER_API_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_API_ACCESS_TOKEN_SECRET
})

const postTweet = (message) => {
    return new Promise((resolve, reject) => {
        client.post('statuses/update', { 
            status: message
        }, (error, data, response) => {
            if (error) {
                console.log(error)
                reject(error)
            } else {
                console.log(data)
                resolve(data)
            }

        })
    })
}

module.exports = { postTweet }