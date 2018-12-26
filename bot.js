const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527410243173351427")
setInterval(function() {
channel.send(`**Credit By Great Server كريدت باي قريت سرفر**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
