///////////////////Required modules////////////////////
const fs = require('fs');
const Discord = require("discord.js");
const config = require("./config.json");
const cliProgress = require('cli-progress');
////////////////////Startup////////////////////////////
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
bar1.start(100, 0);
bar1.update(200);
bar1.stop();
console.log("Copyright 2020-2025 - Peiphy Industries LLC");
////////////Setting up a file command system///////////
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./cmds/${file}`);
	client.commands.set(command.name, command);}
//////////////File command checker/////////////////////
const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}

});

client.login(config.BOT_TOKEN);