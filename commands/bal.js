const Discord = require("discord.js");
const gems = require("../gems.json");

exports.run = async (bot, message, args) => {
  if(!gems[message.author.id]) {
    gems[message.author.id] = {
      gems: 50,
      tokens: 0
    }
  }
  message.channel.send(`**${message.author.username}**, you have ${gems[message.author.id].gems}💎 gems.);
}

module.exports.help = {
  name: "desc"
}
