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
}
module.exports.help = {
  name: "stockMarket"
}
