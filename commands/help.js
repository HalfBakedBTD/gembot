const Discord = require("discord.js");

exports.run = async (bot, message, args) => {  
  message.channel.send(`**__Commands:__**\n**/help** - only people with 60 IQ wouldn't know what this is...\n**/bal** - shows you how much moneys you have.\n**/spin** - spins a wheel at a chance for moneys.\n**/bump** - bump your server to the top of the bump list.\n**\invite** - send a link to force me into a server.\n\n\`+$250 for joining a bumped server.\`\n\`+$500 for joining https://discord.gg/4XPxu73\``);
}

module.exports.help = {
  name: "help"
}
