const Discord = require("discord.js");
const gems = require("../gems.json");
//h
exports.run = async (bot, message, args) => {
  if(!gems[message.author.id]) {
    gems[message.author.id] = {
      gems: 50,
      tokens: 0
    }
  }
  let ad = ["AD: https://discord.gg/HuSvZg", "Advertise Here! Message @HalfBakedGaming#4048 to see about getting placed on this spin wheel!"];
  let adpick = Math.floor((Math.random() * ad.length));
  let prize = ["💰", "💎", "💎", "💎", "💎", "💸", "💸", "💸", "💸", "💸", "🌸", "🌸", "🌸", "🌸", "🌸", "🌸", "🌸", "🌸", "🌸", "🌸", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🍎 ", "🍎 ", "🍎 ", "🍎 ", "🍎 ", "🍎 ", "🍎 ", "🍎 ", "🍎 ", "🍎 ", "🍎 ", "🍎 ", "🍎 ", "🍎 ", "🍎"]
  let ppick = Math.floor((Math.random() * prize.length));  
  let amt = 0;
  if (prize[ppick] === "💰") {
    gems[message.author.id].gems = gems[message.author.id].gems + 1000
    amt = amt + 1000
  }
  if (prize[ppick] === "💎") {
    gems[message.author.id].gems = gems[message.author.id].gems + 250
    amt = amt + 250
  }
  if (prize[ppick] === "💸") {
    gems[message.author.id].gems = gems[message.author.id].gems + 195
    amt = amt + 195
  }
  if (prize[ppick] === "🌸") {
    gems[message.author.id].gems = gems[message.author.id].gems + 80
    amt = amt + 100
  }
  if (prize[ppick] === "🍎") {
    gems[message.author.id].gems = gems[message.author.id].gems + 35
    amt = amt + 35
  }
  if (prize[ppick] === "🥔") {
    gems[message.author.id].gems = gems[message.author.id].gems + 20
    amt = amt + 20
  }
  let spinEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setTitle(`${message.author.username}:`)
  .setDescription(`Roll: ${prize[ppick]} = $${amt}\n\nRoll Chances:\n🥔 -32%\t🍎 - 28%\n🌸 - 20%\t💸 - 10%\n💎- 8%\t💰 - 2%`);
  message.channel.send(spinEmbed);
}

module.exports.help = {
  name: "spin"
}
