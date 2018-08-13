const Discord = require("discord.js");

exports.run = async (bot, message, args) => {  
  message.channel.send(`**__Commands:__**\n**/bal** - shows you how many diamonds you have.\n**/spin** - spins a wheel at a chance for either an ad or gems.\n**/bump** - bump your server to the top of the bump list so people can see and join it for gems. Trust me, it works.\n**invite** - send a link to force me into a server.\n\n\`+250 gems for joining a bumped server.\``);
}

module.exports.help = {
  name: "help"
}
