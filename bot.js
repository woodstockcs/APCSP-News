console.log('The Bot is starting');
var Papa = require('papaparse');
var Twit = require('twit');
var T = new Twit( {
consumer_key:         
  'oS7AW2MsMdWzDyqic3wLDutz2', 
  consumer_secret:      
  'jHnyoHybPbgQsztW4cItxIxR8UrHqJPobSKXHQa2YZ6d5KmJYX', 
  access_token:         
  '977179081723740166-DQy6H9nUFhmiq1CQoMWeY3s5ZQo7DtK', 
  access_token_secret:  
  'y9sBkrWh8ouoXWXczknobXwT2DEd35LiNrsVkH4PC7JgX',




 
  timeout_ms:           
  60*1000,
}
);




Papa.parse("articles.txt", {
	complete: function(results) {
		console.log("Finished:", results.data);
	}
});
//var fs = require('fs');
//fs.readFile('articles.txt', 'utf8', function(err, data) {
//  if (err) throw err;
//  console.log('OK');
//  console.log(data);
  
//});





//tweetIt();
//setInterval(tweetIt,1000*30)
//function tweetIt() {
//  var r = Math.floor(Math.random()*100);
//  var tweet = {
//  status: 
//  'here is a random number:' + r
//}

//T.post('statuses/update', tweet, tweeted);

//function tweeted(err, data, response) {
//  if (err) {
//    console.log("Something went wrong!");
//  } else {
//    console.log("It worked!");
//  }
//}
//}
