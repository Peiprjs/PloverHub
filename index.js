//Copyright Peipr and Plover, ©2021-2025//
const Discord = require("discord.js");
const random = require('random');
const Trello = require('trello');
const Sequelize = require('sequelize');
var trello = new Trello("705ff1182a16ae6109b2418f9432ab4c", "c6cf497609fe547805855e470e3b2b976210aea7ed7e603d972eb41a15d88a59");
const config = ("ODA0NDExMjE5NjMyMDYyNTM0.YBL8Uw.vNCDUWR6kS04f3JLlQIpk_Ps2KQ");
const client = new Discord.Client();
const prefix = (",");
const fs = require('fs');
//////////////////////////////////////////////////////
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

//////////////////////////////////////////////////////
client.once('ready', () => {
  console.log(`PloverHub is ready to roll!`);
});
client.login(`${config}`);
console.log('Logged in, connection appears good');
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
//////////////////////////////////////////////////////

});