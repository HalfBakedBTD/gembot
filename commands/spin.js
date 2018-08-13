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
      message.channel.send(`Your Number: 1\n1: AD\:gift: 2: 5\:gem: 3: AD\:gift: 4: 25\:gem: 5: AD\:gift: 6: 100\:gem: 7: AD\:gift: 8: 500\:gem:`);
    }
    if (dieAmt === 2) {
      message.channel.send(`Your Number: 3\n1: AD\:gift: 2: 5\:gem: 3: AD\:gift: 4: 25\:gem: 5: AD\:gift: 6: 100\:gem: 7: AD\:gift: 8: 500\:gem:`);
    }
    if (dieAmt === 3) {
      message.channel.send(`Your Number: 5\n1: AD\:gift: 2: 5\:gem: 3: AD\:gift: 4: 25\:gem: 5: AD\:gift: 6: 100\:gem: 7: AD\:gift: 8: 500\:gem:`);
    }
    if (dieAmt === 4) {
      message.channel.send(`Your Number: 7\n1: AD\:gift: 2: 5\:gem: 3: AD\:gift: 4: 25\:gem: 5: AD\:gift: 6: 100\:gem: 7: AD\:gift: 8: 500\:gem:`);
    }
  }
}

module.exports.help = {
  name: "spin"
}
