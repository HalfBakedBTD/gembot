const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
  let guess = args[0];
  if(!guess) return message.reply("you have to supply a guess. Example: `$flip heads`");
  if (guess !== 'heads') {
    if (guess !== 'tails') {
      message.reply(`choose either heads or tails. ${guess} is not an option.`);
    }
  }
  if(!gems[message.author.id]) {
    gems[message.author.id] = {
      gems: 50,
      tokens: 0
    }
  }
  if(gems[message.author.id].gems < 25) return message.reply("you have less than $25 so you can't flip.");
  let res = ["heads", "tails"]
  let resp = Math.floor((Math.random() * res.length));
  if (res[resp] === guess) {
    gems[message.author.id].gems = gems[message.author.id].gems + 25
    message.channel.send(`**${message.author.username}:**\nI have flipped a coin landing on ${res[resp]}. You guessed ${guess} and won $25!`)
  }
  if (res[resp] !== guess) {
    gems[message.author.id].gems = gems[message.author.id].gems - 25
    message.channel.send(`**${message.author.username}:**\nI have flipped a coin landing on ${res[resp]}. You guessed ${guess} and lost $25.`)
  }
}

module.exports.help = {
  name: "flip"
}
