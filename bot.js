var request = require('request');
var parse = require('csv-parse');
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

var tracker=-1;
function checkArticles() {
  request.get('https://raw.githubusercontent.com/20blactr/APCSP-News/master/articles.txt', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      parse(body, {columns: true, trim: true}, function(err, rows) {
        console.log();
        console.log("articles found:   " + rows.length);
	tracker++;
        var selectedArticle = tracker;
	//var random=Math.floor(Math.random()*1000);
        console.log("random article:   " + rows[selectedArticle].title);
	var tweet = {
        status: 
	rows[selectedArticle].link + " " + rows[selectedArticle].title + "-" + rows[selectedArticle].publisher + " " + "(" + rows[selectedArticle].date + ")"}                                    
	T.post('statuses/update', tweet, tweeted);
	if (tracker>=rows.length-1){
	  tracker=-1;
	}
		
      })
    }
  });
};

function run() {
  setInterval(checkArticles, 300*1000);
};

run();
function tweeted(err, data, response) {
if (err) {
  console.log("Something went wrong!");
        } else {
          console.log("It worked!");
        }
}



