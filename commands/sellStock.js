const Discord = require("discord.js");
const gems = require("../gems.json");
const stock = require("../stocks.json");
const stocks = require("../userstock.json");

exports.run = async (bot, message, args) => { 
  let mai = message.author.id;
  if(!gems[message.author.id]) {
    gems[message.author.id] = {
      gems: 50,
      tokens: 0
    }
  }
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
  if(!stocks[message.author.id]) return message.reply("you have no stock to sell.");
  let item = args[0];
  if(!item) return message.reply("you have to say what you want to sell!\nEX: `$sellStock emerald`");
  if (item === 'opal') {
    if(stocks[mai].opal < 1) return message.reply("you have no ${item} to sell.");
    gems[mai].gems = gems[mai].gems + stock[1221221].opal
    stocks[mai].opal = stocks[mai].opal - 1
    message.channel.send(`**${message.author.username},** you have sold 1 ${item} stock for ${stock[1221221].opal}.`);
  } else if (item === 'topaz') {
    if(stocks[mai].topaz < 1) return message.reply("you have no ${item} to sell.");
    gems[mai].gems = gems[mai].gems + stock[1221221].topaz
    stocks[mai].topaz = stocks[mai].topaz - 1
    message.channel.send(`**${message.author.username},** you have sold 1 ${item} stock for ${stock[1221221].topaz}.`);
  } else if (item === 'diamond') {
    if(stocks[mai].diamond < 1) return message.reply("you have no ${item} to sell.");
    gems[mai].gems = gems[mai].gems + stock[1221221].diamond
    stocks[mai].diamond = stocks[mai].diamond - 1
    message.channel.send(`**${message.author.username},** you have sold 1 ${item} stock for ${stock[1221221].diamond}.`);
  } else if (item === 'emerald') {
    if(stocks[mai].emerald < 1) return message.reply("you have no ${item} to sell.");
    gems[mai].gems = gems[mai].gems + stock[1221221].emerald
    stocks[mai].emerald = stocks[mai].emerald - 1
    message.channel.send(`**${message.author.username},** you have sold 1 ${item} stock for ${stock[1221221].emerald}.`);
  } else if (item === 'amythest') {
    if(stocks[mai].amythest < 1) return message.reply("you have no ${item} to sell.");
    gems[mai].gems = gems[mai].gems + stock[1221221].amythest
    stocks[mai].amythest = stocks[mai].amythest - 1
    message.channel.send(`**${message.author.username},** you have sold 1 ${item} stock for ${stock[1221221].amythest}.`);
  } else if (item === 'ruby') {
    if(stocks[mai].ruby < 1) return message.reply("you have no ${item} to sell.");
    gems[mai].gems = gems[mai].gems + stock[1221221].ruby
    stocks[mai].ruby = stocks[mai].ruby - 1
    message.channel.send(`**${message.author.username},** you have sold 1 ${item} stock for ${stock[1221221].ruby}.`);
  } else if (item === 'sapphire') {
    if(stocks[mai].sapphire < 1) return message.reply("you have no ${item} to sell.");
    gems[mai].gems = gems[mai].gems + stock[1221221].sapphire
    stocks[mai].sapphire = stocks[mai].sapphire - 1
    message.channel.send(`**${message.author.username},** you have sold 1 ${item} stock for ${stock[1221221].sapphire}.`);
  } else {
    message.channel.send(`**${message.author.username},** ${item} is not a stock you can sell.`);
  }
}

module.exports.help = {
  name: "sellStock"
}
