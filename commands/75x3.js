const Discord = require("discord.js");
const gems = require("../gems.json");

exports.run = async (bot, message, args) => {
  let mai = message.author.id;
  if(!gems[message.author.id]) {
    gems[message.author.id] = {
      gems: 50,
      tokens: 0
    }
  }
  if(isNaN(args[0])) return message.reply("please supply a number!");
  
  if(gems[mai].gems < args[0]) return message.reply("you are too broke for that bet!");
  if(parseInt(args[0]) < 1) return message.reply("you have to bet a number above $0!")
  
  let dieAmt = Math.floor(Math.random() * 99) + 1;

  if (dieAmt > 74) {
    let win = parseInt(args[0]) * 2
    gems[mai].gems = gems[mai].gems + win
    message.channel.send(`**${message.author.username}:**\nYou have rolled a ${dieAmt} and won $${win}!`);
  } else {
    gems[mai].gems = gems[mai].gems - parseInt(args[0])
    message.channel.send(`**${message.author.username}:**\nYou have rolled a ${dieAmt} which is lower than 75 so you loose $${parseInt(args[0])}!`);
  }
}

module.exports.help = {
  name: "75x3"
}
