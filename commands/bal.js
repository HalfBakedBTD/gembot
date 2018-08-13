const Discord = require("discord.js");
const gems = require("../gems.json");
//h
exports.run = async (bot, message, args) => {
  if(!gems[message.author.id]) {
    gems[message.author.id] = {
      gems: 50,
      tokens: 0
    }
  }
  message.channel.send(`**${message.author.username}**, you have ${gems[message.author.id].gems}\💎 gems.`);
}

module.exports.help = {
  name: "bal"
}
