const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
  let item = args[0];
  if(!item) return message.reply("you have to supply an item code. Example: `$buy #4`");
  
  if(!gems[message.author.id]) {
    gems[message.author.id] = {
      gems: 50,
      tokens: 0
    }
  }
  
  if (item === '#1') {
    if(gems[message.author.id].gems < 50) return message.reply("you don't have enough money to buy this.");
    message.channel.send(`**${message.author.username},** you have purchased a frog emoji.\nHere is your purchase: 🐸`);
  } else if (item === '#2') {
    if(gems[message.author.id].gems < 80) return message.reply("you don't have enough money to buy this.");
    message.channel.send(`**${message.author.username},** you have purchased two frog emojis.\nHere is your purchase: 🐸 - 🐸`);
  } else if (item === '#3') {
    if(gems[message.author.id].gems < 100) return message.reply("you don't have enough money to buy this.");
    message.channel.send(`**${message.author.username},** you have purchased some tea.\nHere is your purchase: 🍵`);
  } else if (item === '#4') {
    if(gems[message.author.id].gems < 120) return message.reply("you don't have enough money to buy this.");
    message.channel.send(`**${message.author.username},** you have purchased COFFEE.\nHere is your purchase: ☕`);
  } else if (item === '#5') {
    const sayMessage = args.join(" ");
    if(sayMessage === '#5') return message.reply("this buy works a bit different. Please provide the message. Example: `$buy #5 Hey my bro.`");
    message.channel.send(`**${message.author.username},** I am sending HalfBaked this message: ${sayMessage}`) 
    bot.users.filter(u => u.id === '284137818895417344').forEach(user => user.send(`<@${message.author.id}> says: ${sayMessage}`));
  } else {
    message.channel.send("The item code you chose doesn't exist.");
  }
}

module.exports.help = {
  name: "buy"
}
