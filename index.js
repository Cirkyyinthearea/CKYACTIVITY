const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1297623265606369362')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/apparentlyjack_rl') 
    .setState('Trelyy x7 is here')
    .setName('Trelyy x7')
    .setDetails(`Trelyy is here`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1297461600810438708/1297621653685145600/d9f6dde6-a171-4443-99d4-3774f1198c4f.gif?ex=671697d6&is=67154656&hm=73821164ea2cda1c540fea1d3117c0158524e98403ad7ca01b76b88179b32422&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('I TRY TO KILL YOU') 
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1297461600810438708/1297621636039708702/TwitterVerifiedIconGIF-TwitterVerifiedIcon-DiscoverShareGIFs-ezgif.com-gif-maker.gif?ex=671697d2&is=67154652&hm=5b8b9dd5d452e385c6d848876901748c4a557a5380eb13bbc00f52e5b816da8f&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('Google', 'https://google.com');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
