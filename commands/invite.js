const Discord = require("discord.js");

exports.run = async (bot, message, args) => {  
  message.channel.send(`Force me to join your server with this link:\n\thttps://discordapp.com/oauth2/authorize?client_id=603405131773640724&permissions=8&scope=bot`);
}

module.exports.help = {
  name: "invite"
}
