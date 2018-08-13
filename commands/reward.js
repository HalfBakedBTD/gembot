const Discord = require("discord.js");
let gems = require("../gems.json");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '284137818895417344') return message.reply("only my owner can use this command. (You didn't know logan was a slave did you?)");
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!pUser) return message.channel.send(`Please mention a user!`)

  if(!gems[pUser.id]){
    gems[pUser.id] = {
      gems: 50,
      tokens: 0
    };
  }
  
  if(isNaN(args[1])) return message.reply("please supply a number!");  

  let pCoins = gems[pUser.id].gems;
  let pBank = gems[pUser.id].tokens;

  gems[pUser.id] = {
    gems: pCoins + parseInt(args[1]),
    tokens: pBank
  };

    let giveEmbed = new Discord.RichEmbed()
    .setColor('#000000')
    .setThumbnail("https://tse3.mm.bing.net/th?id=OIP.QbYo3zcLpLvozS5IyOsKSAHaId&pid=15.1&P=0&w=300&h=300")
    .setDescription(`<@${message.author.id}> gave ${args[1]} gems to ${pUser}`);
  
  message.channel.send(giveEmbed);

  fs.writeFile("./gems.json", JSON.stringify(gems), (err) => {
    if(err) cosole.log(err)
  });

}

module.exports.help = {
  name: "reward"
}
