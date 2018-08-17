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
  if (!stocks[message.author.id]) {
    stocks[message.author.id] = {
      opal: 0,
      topaz: 0,
      diamond: 0,
      emerald: 0,
      amythest: 0,
      ruby: 0,
      sapphire: 0
    }
  }
  let item = args[0];
  if(!item) return message.reply("you have to say what you want to buy!\nEX: `$buyStock emerald`")
  if (item === 'opal') {
    if(gems[mai].gems < stock[1221221].opal) return message.channel.send(`**${message.author.username},** you do not have enough money to buy this item.`);
    gems[mai].gems = gems[mai].gems - stock[1221221].opal
    stocks[mai].opal = stocks[mai].opal + 1
    message.channel.send(`**${message.author.username},** you have bought 1 ${item} stock.`);
  } else if (item === 'topaz') {
    if(gems[mai].gems < stock[1221221].topaz) return message.channel.send(`**${message.author.username},** you do not have enough money to buy this item.`);
    gems[mai].gems = gems[mai].gems - stock[1221221].topaz
    stocks[mai].topaz = stocks[mai].topaz + 1
    message.channel.send(`**${message.author.username},** you have bought 1 ${item} stock.`);
  } else if (item === 'diamond') {
    if(gems[mai].gems < stock[1221221].diamond) return message.channel.send(`**${message.author.username},** you do not have enough money to buy this item.`);
    gems[mai].gems = gems[mai].gems - stock[1221221].diamond
    stocks[mai].diamond = stocks[mai].diamond + 1
    message.channel.send(`**${message.author.username},** you have bought 1 ${item} stock.`);
  } else if (item === 'emerald') {
    if(gems[mai].gems < stock[1221221].emerald) return message.channel.send(`**${message.author.username},** you do not have enough money to buy this item.`);
    gems[mai].gems = gems[mai].gems - stock[1221221].emerald
    stocks[mai].emerald = stocks[mai].emerald + 1
    message.channel.send(`**${message.author.username},** you have bought 1 ${item} stock.`);
  } else if (item === 'amythest') {
    if(gems[mai].gems < stock[1221221].topaz) return message.channel.send(`**${message.author.username},** you do not have enough money to buy this item.`);
    gems[mai].gems = gems[mai].gems - stock[1221221].amythest
    stocks[mai].amythest = stocks[mai].amythest + 1
    message.channel.send(`**${message.author.username},** you have bought 1 ${item} stock.`);
  } else if (item === 'ruby') {
    if(gems[mai].gems < stock[1221221].ruby) return message.channel.send(`**${message.author.username},** you do not have enough money to buy this item.`);
    gems[mai].gems = gems[mai].gems - stock[1221221].ruby
    stocks[mai].ruby = stocks[mai].ruby + 1
    message.channel.send(`**${message.author.username},** you have bought 1 ${item} stock.`);
  } else if (item === 'sapphire') {
    if(gems[mai].gems < stock[1221221].sapphire) return message.channel.send(`**${message.author.username},** you do not have enough money to buy this item.`);
    gems[mai].gems = gems[mai].gems - stock[1221221].sapphire
    stocks[mai].sapphire = stocks[mai].sapphire + 1
    message.channel.send(`**${message.author.username},** you have bought 1 ${item} stock.`);
  } else {
    message.channel.send(`**${message.author.username},** ${item} is not a stock you can buy.`);
  }
}

module.exports.help = {
  name: "buyStock"
}
