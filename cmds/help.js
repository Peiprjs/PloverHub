module.exports = {
	name: 'help',
	description: 'Help!',
	execute(message, args) {
    message.channel.send("Thank you for contacting Plover Customer Support. Please do not hang up, and wait until an advisor is available to assist you.");
	},
};