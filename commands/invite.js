const Discord = require("discord.js");

exports.run = async (bot, message, args) => {  
  message.channel.send(`Force me to join your dead server wih this link:\n\thttps://discordapp.com/oauth2/authorize?client_id=478337796520673311&permissions=8&scope=bot`);
}

module.exports.help = {
  name: "invite"
}
