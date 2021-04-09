/////////////////Required modules///////////////////
const fs = require('fs');
const Discord = require("discord.js");
const config = require("./config.json");
const random = require('random')
const cliProgress = require(
	'cli-progress');
var Trello = require("trello");
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
////////////////////Startup/////////////////////////
const bar1 = new cliProgress
	.SingleBar({}, cliProgress.Presets
		.shades_classic);
console.log(`
Loading assets...
`);
bar1.start(100, 0);
var sloop = random.int((min = 250), (max = 500))
sleep(sloop);
bar1.update(25);
var sloop = random.int((min = 400), (max = 1000))
sleep(sloop);
bar1.update(50);
var sloop = random.int((min = 300), (max = 1000))
sleep(sloop);
bar1.update(99);
var sloop = random.int((min = 500), (max = 2000))
sleep(sloop);
bar1.update(100);
bar1.stop();
console.log(`
 _____   _____   _   _____   _   _  __    __ 
|     ⧹ | ____| | | |  _  ⧹ | | | | ⧹ ⧹  / / 
| |_| | | |__   | | | |_| | | |_| |  ⧹ ⧹/ /  
|  ___/ |  __|  | | |  ___/ |  _  |   ⧹  /   
| |     | |___  | | | |     | | | |   / /    
|_|     |_____| |_| |_|     |_| |_|  /_/     
 _   _   _   _   _____  
| | | | | | | | |  _  ⧹ 
| |_| | | | | | | |_| | 
|  _  | | | | | |  _  { 
| | | | | |_| | | |_| | 
|_| |_| ⧹_____/ |_____/ 

Peiphy Industries LLC - Copyright 2020-2025

-------------DEBUG MODE INITIATED-------------
`);
///////////File commands and client setup///////////
const client = new Discord.Client({
	ws: {
		properties: {
			$browser: "Discord iOS"
		}
	}
});
client.login(config.BOT_TOKEN);
var trello = new Trello(config.TRELLO_A,
	config.TRELLO_B);
client.commands = new Discord
	.Collection();
const commandFiles = fs.readdirSync(
	'./cmds').filter(file => file
	.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(
		`./cmds/${file}`);
	client.commands.set(command.name,
		command);
}
///////////////////////Login////////////////////////
const prefix = "p!";
client.on('ready', () => {
	sleep(1500);
	console.log(
		`Logged in as ${client.user.tag}!`
	);
	client.user.setPresence({
			activity: {
				name: 'with your money'
			},
			status: 'idle'
		})
		.then(console.log)
		.catch(console.error);
});
///////////////File command checker/////////////////
client.on('message', message => {
	if (!message.content
		.startsWith(prefix) ||
		message.author.bot)
		return;
	
	const args = message.content
		.slice(prefix.length)
		.trim().split(/ +/);
	const command = args.shift()
		.toLowerCase();
////////////////7//////Commands/////////////////////
//////All commands  are fraccionated in ./cmds//////
//-------------------------------//
	if (command === 'ping') {
		client.commands.get(
			'ping').execute(
			message, args);
	};
//-------------------------------//
	if (command === 'help') {
		client.commands.get(
			'help').execute(
			message, args);
	};
//-------------------------------//
		if (command === 'login') {
		client.commands.get(
			'login').execute(
			message, args);
	};
//-------------------------------//

});
