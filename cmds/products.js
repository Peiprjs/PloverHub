module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
    message.channel.send("Plover currently has these products available:");
    message.channel.send("None")
	},
};