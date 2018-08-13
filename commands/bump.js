const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
  message.channel.createInvite()
    .then(invite => {
   		let adEmbed = new Discord.RichEmbed()
   		.setColor('#27ae60')
   		.setTitle(`${message.guild.name}:`)
   		.setDescription(`**USER ID:** ${message.author.username} (ID: ${message.author.id})\n**Join https://discord.gg/${invite.code}** for :gem:.`);
   		bot.channels.filter(c => c.name === 'bumps').forEach(channel => channel.send(adEmbed));
	 });
}

module.exports.help = {
  name: "bet"
}
