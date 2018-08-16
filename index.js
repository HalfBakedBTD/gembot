const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const gems = require("./gems.json");
const stock = require("./stocks.json");

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

function stockUpdate(bot, message) {
	 if(!stock[1221221]) {
    stock[1221221] = {
      opal: 50,
      topaz: 100,
      diamond: 250,
      emerald: 500,
      amythest: 1000,
      ruby: 1800,
      sapphire: 2500
    }
  }
	
  let adEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setTitle(`Stock Update:`)
  .setDescription(`Opal - $${stock[1221221].opal}\nTopaz - $${stock[1221221].topaz}\nDiamond - $${stock[1221221].diamond}\nEmerald - $${stock[1221221].emerald}\nAmythest - $${stock[1221221].amythest}\nRuby - $${stock[1221221].ruby}\nSapphire - $${stock[1221221].sapphire}`);
  bot.channels.filter(c => c.name === 'stock-prices').forEach(channel => channel.send(adEmbed));
 setTimeout(() => stockUpdate(bot, message), 5*60000);
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setGame(`$help | ${bot.guilds.size} servers.`);
  
  if(!stock[1221221]) {
    stock[1221221] = {
      opal: 50,
      topaz: 100,
      diamond: 250,
      emerald: 500,
      amythest: 1000,
      ruby: 1800,
      sapphire: 2500
    }
  }
  stockUpdate(bot, message)
});

bot.on('guildCreate', guild => {
  bot.user.setGame(`$help | ${bot.guilds.size} servers.`);
});

bot.on('guildMemberAdd', member => {
  if(!gems[member.id]) {
    gems[member.id] = {
      gems: 50,
      tokens: 0
    }
  }
  gems[member.id].gems = gems[member.id].gems + 250
  member.send("You have joined a bumped server. You just gained $250. (If you are new to this bot, be sure to check it out in the guild you joined by typing `/help` in a channel!)")
  if (member.guild.ownerID === '284137818895417344') {
    gems[member.id].gems = gems[member.id].gems + 250
    member.send("The bumped server you joined is owned by <@284137818895417344> so you get $250 bonus bucks.");
  }
});

bot.on('guildMemberRemove', member => {
  if(!gems[member.id]) {
    gems[member.id] = {
      gems: 50,
      tokens: 0
    }
  }
  gems[member.id].gems = gems[member.id].gems - 300
  member.send("You left a bumped server. `-$300`")
  if (member.guild.ownerID === '284137818895417344') {
    gems[member.id].gems = gems[member.id].gems - 300
    member.send("The bumped server you left is owned by <@284137818895417344> so you were penalized. `-$300`");
  }
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: "$"
    };
  }
  
  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (!message.content.startsWith(`${prefix}`)) {
    return
  }
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  
});

bot.login(process.env.BOT_TOKEN);
