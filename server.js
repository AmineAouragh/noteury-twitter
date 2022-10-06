const express = require('express')
const { postTweet } = require('./bot')

const app = express()

app.get('/', (req, res) => {
    const tweet = postTweet('Is that the first tweet I post from Noteury using the api or I am just dreaming?')
    console.log(tweet)
})

app.listen(3000, function () {
    console.log('The server is listening at 3000!');
});