const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client()
const ms = require("parse-ms")

client.on('ready', async () => {
    console.log('Je suis prêt')
    
    client.user.setActivity("vunelia - Status", {
        type: "PLAYING",
      });
    
    let channelss = client.channels.cache.get("id du channel")
    let status = await channelss.messages.fetch("id du msg")
    
 setInterval(() => {
     var mcpeping = require('mcpe-ping');
       
       let time = ms(Date.now())
       
       let houres = time.hours + 1
       
    mcpeping('ip de ton serv', port, function(err, res){
        mcpeping('ip de ton serv', port, function(error, ress){
            
            if(err){
                lobby = ` \`état:\` - Offline (Whitelist) \n \`Déconnecté\` - 0/500`
            }else{
                lobby = ` \`état:\` - En Ligne (Whitelist) \n \`Connecté\` - ${res.currentPlayers}/${res.maxPlayers}`
            }
            
           
         const succ = new Discord.MessageEmbed()
        .setColor("#009ccd")
        .setTitle("Status vunelia:")
        .addField("Server Lobby", lobby)
        .setFooter(`Actualisation, toutes les 10seconds ${houres}h ${time.minutes}m ${time.seconds}`)
        
        status.edit(succ)
        })
        
    }, 3000);
    }, 10000);

});


client.login("ton token");