const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
  if(!gems[message.author.id]) {
    gems[message.author.id] = {
      gems: 50,
      tokens: 0
    }
  }
  if (gems[message.author.id].gems < 4999) {
	  message.channel.send(`Bumping your server costs $5000! You only have $${gems[message.author.id].gems} currently. The fastest way to get money is joining other bumped servers.`);
	  return;
  }
 gems[message.author.id].gems = gems[message.author.id].gems - 5000
	if (message.author.id !== '346687165868015616') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Use the `/bump` command in a server you are Admin in or one that you own.");
	}
  message.channel.createInvite()
    .then(invite => {
   		let adEmbed = new Discord.RichEmbed()
   		.setColor('#27ae60')
   		.setTitle(`${message.guild.name}:`)
   		.setDescription(`**USER:** ${message.author.username} (ID: ${message.author.id})\n\n**Join https://discord.gg/${invite.code}** for $250+.`);
   		bot.channels.filter(c => c.name === 'bumps').forEach(channel => channel.send(adEmbed));
	 });
	message.channel.send("Your server has been bumped to the top of the list. (-$5,000)")
}

module.exports.help = {
  name: "bump"
}
