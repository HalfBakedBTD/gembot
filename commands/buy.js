const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
  let item = args[0];
  if(!item) return message.reply("you have to supply an item code. Example: `$buy #4`");
  
  if (item === '#1') {
    message.channel.send(`**${message.author.username},** you have purchased a frog emoji.\nHere is your purchase: 🐸`);
  } else if (item === '#2') {
    message.channel.send(`**${message.author.username},** you have purchased two frog emojis.\nHere is your purchase: 🐸 - 🐸`);
  } else if (item === '#3') {
    message.channel.send(`**${message.author.username},** you have purchased some tea.\nHere is your purchase: 🍵`);
  } else if (item === '#4') {
    message.channel.send(`**${message.author.username},** you have purchased COFFEE.\nHere is your purchase: ☕`);
  } else {
    message.channel.send("The item code you chose doesn't exist.");
  }
}

module.exports.help = {
  name: "buy"
}
