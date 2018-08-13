const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '346687165868015616') return message.reply("only my owner can use this command. (You didn't know logan was a slave did you?)");
  let person = parseInt(args[0]);
  let amt = args[1];
  message.channel.send(`I am sending <@${person}> gems in the amount of ${amt}.`);
  if(!gems[person]) {
    gems[person] = {
      gems: amt + 50,
      tokens: 0
    }
    return;
  }
 gems[person].gems = gems[person].gems + amt 
}

module.exports.help = {
  name: "reward"
}
