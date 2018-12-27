const Discord = require("discord.js");

exports.run = async (bot, message, args) => {  
  message.channel.send(`**__Commands:__**\n**$help** - only people with 60 IQ wouldn't know what this is...\n**$55x2** - bet for a chance to double your bet!\n**$75x3** - bet at a chance to triple your bet!\n**$shop** - shows items to buy.\n**$buy** - lets you buy an item from the shop.\n**$bal** - shows you how much moneys you have.\n**$spin** - spins a wheel at a chance for moneys.\n**$invite** - send a link to force me into a server.\n**$flip** - flip a coin...\n\n**__Beta Commands:__**\n**$stockMarket** - shows the stock market.\n**$myStock** - lets you view your stock.\n**$buyStock** - lets you buy stock.\n**$sellStock** - lets you sell stock.\n\n`);
}

module.exports.help = {
  name: "help"
}
