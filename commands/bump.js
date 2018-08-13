const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
	if (message.author.id !== '346687165868015616') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
	}
  message.channel.createInvite()
    .then(invite => {
   		let adEmbed = new Discord.RichEmbed()
   		.setColor('#27ae60')
   		.setTitle(`${message.guild.name}:`)
   		.setDescription(`**USER ID:** ${message.author.username} (ID: ${message.author.id})\n**Join https://discord.gg/${invite.code}** for :gem:.`);
   		bot.channels.filter(c => c.name === 'bumps').forEach(channel => channel.send(adEmbed));
	 });
	message.channel.send("Your server has been bumped to the top of the list.")
}

module.exports.help = {
  name: "bump"
}
