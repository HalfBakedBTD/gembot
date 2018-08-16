const Discord = require("discord.js");
const gems = require("../gems.json");
const stock = require("../stocks.json");

exports.run = async (bot, message, args) => { 
  if(!gems[message.author.id]) {
    gems[message.author.id] = {
      gems: 50,
      tokens: 0
    }
  }
  if(!stock[1221221]) {
    stock[1221221] = {
      opal: 50,
      topaz: 100,
      diamond: 250,
      emerald: 500,
      amythest: 1000,
      ruby: 1800,
      sapphire: 2500
    }
  }
  message.channel.send(`**__Items Avaliable:__**\nOpal - $${stock[1221221].opal}\nTopaz - $${stock[1221221].topaz}\nDiamond - ${stock[1221221].diamond}\nEmerald - ${stock[1221221].emerald}\nAmythest - ${stock[1221221].amythest}\nRuby - ${stock[1221221].ruby}\nSapphire - ${stock[1221221].sapphire}\n\n\`Make a channel named #stock-prices to see changes in the stock.\``);
}

module.exports.help = {
  name: "stockMarket"
}
