module.exports = {
	name: 'login',
	description: 'Ping!',
	execute(message, args) {
			const Discord = require('discord.js');
			const rid = parseInt(args[0]);
			const ch = ("829970255849455626");
	if (isNaN(rid)) {
		const wrong = new Discord.MessageEmbed()
	.setColor('#eb3434')
	.setTitle('Unexpected input')
	.setDescription(`Yeah that's not really a valid ID. Try again, bucko.`)
	message.channel.send(wrong);
	};
	if (!isNaN(rid)){
	const right = new Discord.MessageEmbed()
	.setColor('#17e810')
	.setTitle('Logged in!')
	.setDescription(`Welcome to Plover! We will manually check your account ownership, and then you'll be able to purchase our tech!`)
	message.channel.send(right);
		var auth = message.author;
	  message.client.channels.cache.get(ch).send("`"+`${rid}`+"` - `"+`${message.author}`+"`");	
	}
}
};