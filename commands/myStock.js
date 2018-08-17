const Discord = require("discord.js");
const stocks = require("../userstock.json");

exports.run = async (bot, message, args) => { 
  if (!stocks[message.author.id]) {
    stocks[message.author.id] = {
      opal: 0,
      topaz: 0,
      diamond: 0,
      emerald: 0,
      amythest: 0,
      ruby: 0,
      sapphire: 0
    }
  }
  message.channel.send(`**${message.author.username}'s Stocks:**\nOpal - ${stocks[message.author.id].opal}\nTopaz - ${stocks[message.author.id].topaz}\nDiamond - ${stocks[message.author.id].diamond}\nEmerald - ${stocks[message.author.id].emerald}\nAmythest - ${stocks[message.author.id].amythest}\nRuby - ${stocks[message.author.id].ruby}\nSapphire - ${stocks[message.author.id].sapphire}`);
}
module.exports.help = {
  name: "myStock"
}
