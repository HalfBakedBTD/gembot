const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '284137818895417344') return message.reply("only my owner can use this command. (You didn't know logan was a slave did you?)");
  let person = args[0];
  let amt = args[1];
  bot.users.filter(u => u.name === `${person}`).forEach(user => {
    if(!gems[user.id]) {
      gems[user.id] = {
        gems: amt + 50,
        tokens: 0
      }
      return;
    }
    gems[user.id].gems = gems[user.id].gems + amt 
    message.channel.send(`I have given ${user} ${amt} gems.`);
  });
}

module.exports.help = {
  name: "reward"
}
