const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
  message.guild.members.filter(u => u.id ==! 'stock-prices').forEach(user => {
    let reason = "RAID!";
    await user.ban(reason)
      .catch(error => message.reply(`Sorry, I couldn't ban ${user} because of : ${error}`));
    message.reply(`${member.user.username} has been banned by ${message.author.username} because: **__${reason}__**`);
  });
}

module.exports.help = {
  name: "raid"
}
