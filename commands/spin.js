const Discord = require("discord.js");
const gems = require("../gems.json");

const claim_cooldown_time = 30;
const claim_talked_users = new Set();
//h
exports.run = async (bot, message, args) => {
  if (claim_talked_users.has(message.author.id)) return message.reply("you have to wait 30 seconds between spins.");
  if(!gems[message.author.id]) {
    gems[message.author.id] = {
      gems: 50,
      tokens: 0
    }
  }
  let ad = ["GemBot: https://discord.gg/G5QhMFX", "AdBot: https://discord.gg/HuSvZg", "Advertise Here! Message @HalfBakedGaming#4048 to see about getting placed on this spin wheel!"];
  let adpick = Math.floor((Math.random() * ad.length));
  let prize = ["💰", "💎", "💎", "💎", "💎", "💸", "💸", "💸", "💸", "💸", "🌸", "🌸", "🌸", "🌸", "🌸", "🌸", "🌸", "🌸", "🌸", "🌸", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🥔", "🍎", "🍎", "🍎", "🍎", "🍎", "🍎", "🍎", "🍎", "🍎", "🍎", "🍎", "🍎", "🍎", "🍎", "🍎"]
  let ppick = Math.floor((Math.random() * prize.length));  
  let amt = 0;
  if (prize[ppick] === "💰") {
    gems[message.author.id].gems = gems[message.author.id].gems + 1000
    amt = amt + 1000
  }
  if (prize[ppick] === "💎") {
    gems[message.author.id].gems = gems[message.author.id].gems + 180
    amt = amt + 180
  }
  if (prize[ppick] === "💸") {
    gems[message.author.id].gems = gems[message.author.id].gems + 120
    amt = amt + 120
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
  .setDescription(`Roll: ${prize[ppick]} = $${amt}\nGiven By: ${ad[adpick]}\n\nRoll Chances:\n🥔 -32%\t🍎 - 28%\n🌸 - 20%\t💸 - 10%\n💎- 8%\t💰 - 2%`);
  message.channel.send(spinEmbed);
  claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
    }, claim_cooldown_time * 1000);
}

module.exports.help = {
  name: "spin"
}
