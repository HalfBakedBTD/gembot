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
  let prize = ["AD", "GIFT"];
  let ppick = Math.floor((Math.random() * prize.length));
  if (prize[ppick] === "AD") {
    let ad = ["Join the home of AdBot! Link: https://discord.gg/HuSvZg", "Advertise Here! Message <@284137818895417344> to see about getting placed on this spin wheel for only 5$ a month or 40$ a year!"];
    let adpick = Math.floor((Math.random() * ad.length));
    let dieAmt = Math.floor(Math.random() * 3) + 1;
    if (dieAmt === 1) {
      message.channel.send(`Your Number: 1\n\n**Prizes:**\n\t1: AD\:gift: \n\t2: 5\:gem: \n\t3: AD\:gift: \n\t4: 25\:gem: \n\t5: AD\:gift: \n\t6: 100\:gem: \n\t7: AD\:gift: \n\t8: 500\:gem:`);
    }
    if (dieAmt === 2) {
      message.channel.send(`Your Number: 3\n\n**Prizes:**\n\t1: AD\:gift: \n\t2: 5\:gem: \n\t3: AD\:gift: \n\t4: 25\:gem: \n\t5: AD\:gift: \n\t6: 100\:gem: \n\t7: AD\:gift: \n\t8: 500\:gem:`);
    }
    if (dieAmt === 3) {
      message.channel.send(`Your Number: 5\n\n**Prizes:**\n\t1: AD\:gift: \n\t2: 5\:gem: \n\t3: AD\:gift: \n\t4: 25\:gem: \n\t5: AD\:gift: \n\t6: 100\:gem: \n\t7: AD\:gift: \n\t8: 500\:gem:`);
    }
    if (dieAmt === 4) {
      message.channel.send(`Your Number: 7\n\n**Prizes:**\n\t1: AD\:gift: \n\t2: 5\:gem: \n\t3: AD\:gift: \n\t4: 25\:gem: \n\t5: AD\:gift: \n\t6: 100\:gem: \n\t7: AD\:gift: \n\t8: 500\:gem:`);
    }
    message.channel.send(`${ad[adpick]}`);
  }
  if (prize[ppick] === "GIFT") {
    let dieAmtt = Math.floor(Math.random() * 99) + 1;
    if (dieAmt > 99) {
      message.channel.send(`Your Number: 8\n\n**Prizes:**\n\t1: AD\:gift: \n\t2: 5\:gem: \n\t3: AD\:gift: \n\t4: 25\:gem: \n\t5: AD\:gift: \n\t6: 100\:gem: \n\t7: AD\:gift: \n\t8: 500\:gem:`);
      gems[message.author.id].gems = gems[message.author.id].gems + 500
      message.channel.send(`You have won 500 gems! You now have ${gems[message.author.id].gems}:gem:.`)
    } else if (dieAmt > 80) {
      message.channel.send(`Your Number: 6\n\n**Prizes:**\n\t1: AD\:gift: \n\t2: 5\:gem: \n\t3: AD\:gift: \n\t4: 25\:gem: \n\t5: AD\:gift: \n\t6: 100\:gem: \n\t7: AD\:gift: \n\t8: 500\:gem:`);
      gems[message.author.id].gems = gems[message.author.id].gems + 100
      message.channel.send(`You have won 100 gems! You now have ${gems[message.author.id].gems}:gem:.`)
    } else if (dieAmt > 45) {
      message.channel.send(`Your Number: 4\n\n**Prizes:**\n\t1: AD\:gift: \n\t2: 5\:gem: \n\t3: AD\:gift: \n\t4: 25\:gem: \n\t5: AD\:gift: \n\t6: 100\:gem: \n\t7: AD\:gift: \n\t8: 500\:gem:`);
      gems[message.author.id].gems = gems[message.author.id].gems + 25
      message.channel.send(`You have won 25 gems! You now have ${gems[message.author.id].gems}:gem:.`)
    } else {
      message.channel.send(`Your Number: 2\n\n**Prizes:**\n\t1: AD\:gift: \n\t2: 5\:gem: \n\t3: AD\:gift: \n\t4: 25\:gem: \n\t5: AD\:gift: \n\t6: 100\:gem: \n\t7: AD\:gift: \n\t8: 500\:gem:`);
      gems[message.author.id].gems = gems[message.author.id].gems + 5
      message.channel.send(`You have won 5 gems! You now have ${gems[message.author.id].gems}:gem:.`)
    }  
  }
}

module.exports.help = {
  name: "spin"
}
