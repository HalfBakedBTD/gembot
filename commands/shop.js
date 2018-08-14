const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
  let spinEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setTitle(`Shop:`)
  .setDescription("#1 - A frog emoji. ($50)\n#2 - Two frog emojis. ($80)\n#3 - Some tea. ($100)\n#4 - COFFEE. ($120)\n\nTo buy something from the shop, do `$buy` and then the item number.\nExample: `$buy #3`");
  message.channel.send(spinEmbed);
}

module.exports.help = {
  name: "shop"
}
