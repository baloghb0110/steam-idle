var steamClientFactory = require('./steamClient.js');
var configsArray = [];
var config;
var botArray = [];

config = {};
config.username = ''; // your username
config.password = ''; // your password
config.sharedSecret = '';
config.games = [730, 10] // https://steamcommunity.com/app/730 You can find the GameID in every Steam game link. 730 is the CS2
configsArray.push(config);


console.log('Number of configurations set up: ' + configsArray.length);

for (index = 0; index < configsArray.length; index++) {
  var config = configsArray[index];

  var bot = steamClientFactory.buildBot(config);
  bot.doLogin();
  botArray.push(bot);
}

console.log('Running ' + botArray.length + ' bots.');