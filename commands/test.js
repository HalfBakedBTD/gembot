const Discord = require("discord.js");

exports.run = async (bot, message, args) => {  
  message.channel.send(`I am online!`);
}

module.exports.help = {
  name: "test"
}
