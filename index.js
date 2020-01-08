const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login("NjM0ODAxMzEwMDkyNDkyODEy.XhXbQQ.1sXct17TmYB2b_hvPM6WHOMWn1Y");

