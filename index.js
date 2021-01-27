/Logins and stuff/
const Discord = require("discord.js");
const config = ("Nzc2NDA4OTU0OTQyNjUyNDc2.X60dLw.eCtaGYUBx00z5Jc09wpn_6ol9l0");
const client = new Discord.Client();
const random = require('random');
const prefix = (",");
const fs=require('fs');
///////////////////////////////////////////////////////
client.once('ready', () => {
      let servercount = client.guilds.cache.size;
console.log(`PloverHub is ready to roll! `);
});
client.login(`${config}`);
console.log ('Logged in, connection appears good');
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