const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();

const prefix = "!";

function random(message) {
  const number = Math.floor(Math.random()*6) + 1; // generates a random number
  message.channel.send(number.toString()); // sends a message to the channel with the number
}

let commands = new Map();
commands.set("roll", random);

client.on("message", message => {
  if (message.content[0] === '!') {
      const command = message.content.split(" ")[0].substr(1); // gets the command name
      if (commands.has(command)) { // checks if the map contains the command
          commands.get(command)(message) // runs the command
      }
  }
});

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "latency") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`This message had a latency of ${timeTaken}ms.`);
  }
  
});

client.login('ODI5MDU5NDY4NTk4NzA2MTg2.YGynzA.SBAYwaeoy-ICd8OQOacT_yUCpVE');