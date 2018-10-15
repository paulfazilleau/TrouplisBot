const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') 
    {
    	msg.reply('je suis la !');
    }
});

client.login('NTAxMzMzMjM2MzE2NjM1MTM2.DqYX4Q.z6FR3E1U9trzxXIfrgfRHodklE8');