const Discord = require("discord.js");
const gems = require("../gems.json");

const claim_cooldown_time = 10;
const claim_talked_users = new Set();
//h
exports.run = async (bot, message, args) => {
  if (claim_talked_users.has(message.author.id)) return message.reply("you have to wait 10 minutes between spins.");
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
    gems[message.author.id].gems = gems[message.author.id].gems + 5000
    amt = amt + 5000
  }
  if (prize[ppick] === "💎") {
    gems[message.author.id].gems = gems[message.author.id].gems + 2000
    amt = amt + 2000
  }
  if (prize[ppick] === "💸") {
    gems[message.author.id].gems = gems[message.author.id].gems + 1000
    amt = amt + 1000
  }
  if (prize[ppick] === "🌸") {
    gems[message.author.id].gems = gems[message.author.id].gems + 500
    amt = amt + 500
  }
  if (prize[ppick] === "🍎") {
    gems[message.author.id].gems = gems[message.author.id].gems + 100
    amt = amt + 100
  }
  if (prize[ppick] === "🥔") {
    gems[message.author.id].gems = gems[message.author.id].gems + 50
    amt = amt + 50
  }
  let spinEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setTitle(`${message.author.username}:`)
  .setDescription(`Roll: ${prize[ppick]} = $${amt}\n\nRoll Chances:\n🥔 -32%\t🍎 - 28%\n🌸 - 20%\t💸 - 10%\n💎- 8%\t💰 - 2%`);
  message.channel.send(spinEmbed);
  claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
    }, claim_cooldown_time * 60000);
}

module.exports.help = {
  name: "spin"
}
