//Copyright Peipr and Plover, ©2021-2025//
const Discord = require("discord.js");
const random = require('random');
const Trello = require('trello');
var trello = new Trello("MY APPLICATION KEY", "MY USER TOKEN");
const config = ("ODA0NDExMjE5NjMyMDYyNTM0.YBL8Uw.vNCDUWR6kS04f3JLlQIpk_Ps2KQ");
const client = new Discord.Client();
const prefix = (",");
const fs = require('fs');
///////////////////////////////////////////////////////
client.once('ready', () => {
      let servercount = client.guilds.cache.size;
      console.log(`PloverHub is ready to roll! `);
});
client.login(`${config}`);
console.log ('Logged in, connection appears good');
bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'with your purchases',
            type: "PLAYING"
}});
        
/////////////////////////////////////////////////////
  client.commands = new Discord.Collection();
  const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
	const command = require(`./cmds/${file}`);
	client.commands.set(command.name, command);
}
///////////////////////////////////////////////////////
client.on('message', message => {	
if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

///////////////////////////////////////////////////////

});