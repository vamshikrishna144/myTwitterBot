var Twit = require('twit');

var bot = new Twit({
    consumer_key: process.env.LEARNINGBOT_CONSUMER_KEY,
    consumer_secret: process.env.LEARNINGBOT_CONSUMER_SECRET,
    access_token: process.env.LEARNINGBOT_ACCESS_TOKEN,
    access_token_secret: process.env.LEARNINGBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000
  });

//This code posts a status to the profile
// bot.post('statuses/update', {status: 'This tweet is from my twitter bot'}, function(err, data, response) {
//   if(err) {
//     console.log(`this is the error ${err}`)
//     return;
//   }
//   console.log(`Your message ${data.text} was posted on your account`)
// })


  //Get a list of followers

  // var myFollowers = bot.get('followers/list', function(error, data) {
  //   if(error) {
  //     console.log(`Something went wrong!! ${error}`)
  //     return;
  //   }
  //   data.users.forEach((user) => console.log(user.name))
  // })

  //Get the list of tweets

  // var latestTweets = () => bot.get('statuses/home_timeline', {count: 5}, function(err, data, response) {
  //   if(err) {
  //     console.log("Something went wrong");
  //     return
  // }
  //   console.log(data.forEach((item) => console.log(`Tweet from ${item.user.screen_name} ====> ${item.text}`)));
  // })
  // latestTweets()

//search tweets

bot.get('search/tweets', {q: 'Battlefield1', count: 5}, function(err, data, response) {
  if(err){
    console.log(err)
    return
  }
  data.statuses.forEach((tweet) => console.log(tweet))
})
