module.exports = {
	name: 'products',
	description: 'Products!!',
	execute(message, args) {
    message.channel.send("Plover currently has these products available:");
    message.channel.send("None")
	},
};