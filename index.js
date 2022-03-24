const Discord = require("discord.js")
const client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] }
)

client.login("process.env.token")

/* Non Varia */


client.on("messageCreate", (message) => {
    if(message.content == "!manuele"){
        message.channel.send("Ciao Bello!")
    }
})

