const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);


client.on("message", async message => {
msg = message.content.toLowerCase();

if (msg.startsWith (prefix + "random-arme")) {
  number = 127;
  imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
  message.channel.send ("Vous devez prendre:" , {files: ["./images/" + imageNumber + ".png"]} )
}
})


function getRandomInt(min, max) {

	min = Math.ceil(min);
  
	max = Math.floor(max);
  
	return Math.floor(Math.random() * (max - min)) + min;
  
  }
  
  client.on("message", async message => {
  msg = message.content.toLowerCase();

  if (msg.startsWith(prefix + "défi")) { 
  
		  var msg1 = Array(5); 
  
		  msg1[1] = "collier d'immunité 📿";
  
		  msg1[2] = "!random-sp2 Arme Random ❓";
  
		  msg1[3] = "Droit qu'à l'arme principal 🔫";
  
		  msg1[4] = "No jump ♿";
  
		  msg1[5] = "Tous la même arme 👥"
  
		  msg1[6] = "Défi x2 😱" + " = " + msg1[getRandomInt(1, 6)] + " + " + msg1[getRandomInt(1, 6)];
  
		  var x = getRandomInt(0, 15);
 
		  if (x < 5){ 
  
		   if (x < 3){
  
			message.channel.send(msg1[1]);
  
		  }
  
		  else {
  
			message.channel.send(msg1[3]);
  
		  }
  
		  }
  
		  else if (x<= 9) {
  
			  if (x >= 7){
  
				message.channel.send(msg1[2]); }
  
				  else{
  
					message.channel.send(msg1[4]);
  
				  }
  
		  } 
  
		  else if (x <= 12 ) { 
  
			message.channel.send(msg1[5]);
  
		  }
  
		  else {
  
			message.channel.send(msg1[6])
  
		  }
  
		  }
  })

  client.on("message", async message => {
    msg = message.content.toLowerCase();
  
    if (msg.startsWith(prefix + "code")) {

      var a = getRandomInt(0, 9);
      var b = getRandomInt(0, 9);
      var c = getRandomInt(0, 9);
      var d = getRandomInt(0, 9);
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor("ORANGE")
        .setDescription("appuyé sur 🔁 pour changer")
        .addField("**Votre code aléatoire est:** " + a + b + c + d, "🔐");
      message.channel.send("le code d'accès est envoyé. Vérifiez vos Messages Privés.")
      message.author.send(embed).then(msg => {
    
        msg.react("🔁")
    const backwarsFilter = (reaction, user) =>reaction.emoji.name === '🔁' && user.id === message.author.id;
    
    const backwars = msg.createReactionCollector(backwarsFilter, { time: 60000 });
    
    backwars.on('collect', r => {
      var a = getRandomInt(0, 9);
      var b = getRandomInt(0, 9);
      var c = getRandomInt(0, 9);
      var d = getRandomInt(0, 9);

      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("ORANGE")
            .setDescription("appuyé sur 🔁 pour rechanger")
            .addField("**Votre code aléatoire est:** " + a + b + c + d, "🔐");
            msg.edit(embed)
  }
      )}
      )}
})

client.on("message", async message => {
  msg = message.content.toLowerCase();
    
  if (msg.startsWith (prefix + "random-play")) {
    number = 23;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;

  var msg1 = Array(3); 
  
      msg1[1] = ("Vous devez jouer en **Mission Bazoocarpe**    sur le stage:");
  
		  msg1[2] = ("Vous devez jouer en **Défense de Zone**    sur le stage:");
  
		  msg1[3] = ("Vous devez jouer en **Expédition Risqué**    sur le stage:");
  
		  msg1[4] = ("Vous devez jouer en **Pluie de Palourde**    sur le stage:");
  
		  var x = getRandomInt(0, 20);
 
		  if (x < 10){ 
  
		   if (x < 5){
  
			message.channel.send(msg1[1] , ( {files: ["./maps/" + imageNumber + ".png"]} ) );
  
		  }
  
		  else {
  
			message.channel.send(msg1[3] , ( {files: ["./maps/" + imageNumber + ".png"]} ) );
  
		  }
  
		  }
  
		  else if (x > 10) {
  
			  if (x > 15){
  
        message.channel.send(msg1[2] , ( {files: ["./maps/" + imageNumber + ".png"]} ) );
        
        }
  
				  else{
  
					message.channel.send(msg1[4] , ( {files: ["./maps/" + imageNumber + ".png"]} ) );
  
				  }
  
		  }
  
		  }
  })

  client.on("message", async message => {
    msg = message.content.toLowerCase();
  
    if (msg.startsWith(prefix + "ligue")) {

      x = 0;
      y = 0;
    
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("fb00ff")
            .setDescription("**Ligue Power**")
            .setThumbnail("https://cdn.wikimg.net/en/splatoonwiki/images/thumb/9/9b/Symbol_LeagueF.png/257px-Symbol_LeagueF.png")
            .addField("**Nombre de Victoire:** " + x, " 🔺")
            .addField("**Nombre de Défaite** " + y, " 🔻")
        
            message.channel.send(embed).then(msg => { 

            msg.react("🔺").then( r => {
                msg.react("🔻").then( r => {
                    msg.react("🔚")
    
                const backwarsFilter = (reaction, user) =>reaction.emoji.name === '🔺' && user.id === message.author.id;
                const forwardsFilter = (reaction, user) =>reaction.emoji.name === '🔻' && user.id === message.author.id;
                const EndFilter = (reaction, user) =>reaction.emoji.name === '🔚' && user.id === message.author.id;

                const backwars = msg.createReactionCollector(backwarsFilter, { time: 60000000 });
                const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000000 });
                const End = msg.createReactionCollector(EndFilter, { time: 60000000 });

                backwars.on('collect', r => {
                    x = x + 1;
                  
                  let embed = new Discord.RichEmbed()
                    embed.setAuthor(message.author.tag, message.author.displayAvatarURL)
                    embed.setColor("fb00ff")
                    embed.setDescription("**Ligue Power**")
                    embed.setThumbnail("https://cdn.wikimg.net/en/splatoonwiki/images/thumb/9/9b/Symbol_LeagueF.png/257px-Symbol_LeagueF.png")
                    embed.addField("**Nombre de Victoire:** " + x, " 🔺")
                    embed.addField("**Nombre de Défaite** " + y, " 🔻")
                    msg.edit(embed)
                }
              )

                forwards.on('collect', r => {
                    y = y + 1;
                    let embed = new Discord.RichEmbed()
                        embed.setAuthor(message.author.tag, message.author.displayAvatarURL)
                        embed.setColor("fb00ff")
                        embed.setThumbnail("https://cdn.wikimg.net/en/splatoonwiki/images/thumb/9/9b/Symbol_LeagueF.png/257px-Symbol_LeagueF.png")
                        embed.setDescription("**Ligue Power**")
                        embed.addField("**Nombre de Victoire:** " + x, " 🔺")
                        embed.addField("**Nombre de Défaite** " + y, " 🔻")
                        msg.edit(embed)
          
                })
              

                End.on('collect', r => {
                  if (x + y < 7) {
                    message.channel.send(message.member.user + " veuillez faire 7 match!")
                  return;
                  }
                  
                  
                  else { 
                  

                  let embed = new Discord.RichEmbed()
                      embed.setAuthor(message.author.tag, message.author.displayAvatarURL)
                      embed.setColor("ffff00")
                      embed.setThumbnail("https://images.emojiterra.com/twitter/512px/1f3c6.png")
                      embed.setDescription("Vous avez fait "+ x + " **Victoire** et "+ y + " **Défaite**")
                    
                  let embedA = new Discord.RichEmbed()
                    .setDescription("**Enregistrer votre power et avec qui vous l'avez fait** en faisant")
                    .addField("**1.** pour un **duo**", "`!2power ****` _le power_ et `@user` _votre coéquipier_.")
                    .addField("**2.** pour une **Equipe**","`!4power ****` _le power_ et `@user @user @user` _vos coéquipiers_.")
                    .setColor("00ffd8")
                      msg.delete(embed)
                      message.channel.send(embed)
                      message.channel.send(embedA)
                }})
                
                client.on('message', function (message) {
                  if (!message.guild) return
                  let args = message.content.trim().split(/ +/g)
                  
                  if (args[0].toLowerCase() === prefix + "2power") {
                    let power = args.slice(1, 2).join(" ")
                    let coop = args.slice(2, 3).join(" ")
                      let embedB = new Discord.RichEmbed()
                      .setColor("fb00ff")
                      .setDescription("**le power de** " + message.member.user + " **et de** " + coop + " **est de** " + power + " ("+ x+ " **Victoire** et " + y+ " **Défaite**) **Bravo à eux** 🎉")
                      message.guild.channels.find('name', "sc-ligue").send(embedB)
                      message.channel.send("votre score à bien été inscrit dans le salon #sc-ligue")
              
                    }})
                    client.on('message', function (message) {
                      if (!message.guild) return
                      let args = message.content.trim().split(/ +/g)
                    if (args[0].toLowerCase() === prefix + "4power") {
                      let power = args.slice(1, 2).join(" ")
                      let mate2 = args.slice(2, 3).join(" ")
                      let mate3 = args.slice(3, 4).join(" ")
                      let mate4 = args.slice(4, 5).join(" ")
                        let embedB = new Discord.RichEmbed()
                        .setColor("fb00ff")
                        .setDescription("**le power de** " + message.member.user + " , " + mate2 + " , " + mate3+ " et " + mate4 + " **est de** " + power + " ("+ x+ " **Victoire** et " + y+ " **Défaite**) **Bravo à eux** 🎉")
                        message.guild.channels.find('name', "sc-ligue").send(embedB)
                        message.channel.send("votre score à bien été inscrit dans le salon #sc-ligue")
                
                      }})
              
                    })
              })
                })
    }
            
  })     


  client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
    
    if (args[0].toLowerCase() === prefix + "scrim") {
        let NomA = args.slice(1, 2).join(" ")
        let NomB = args.slice(2, 3).join(" ")
        let BO = args.slice(3, 4).join(" ")
        x = 0;
        y = 0;
    
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("PURPLE")
            .setDescription("Premier à " + BO)
            .addField("**Score de l'équipe:** " + NomA, x)
            .addField("**Score de l'équipe:** " + NomB, y)
        
        message.channel.send(embed).then(msg => {

            msg.react("🔴").then( r => {
                msg.react("🔵")
    
                const backwarsFilter = (reaction, user) =>reaction.emoji.name === '🔴' && user.id === message.author.id;
                const forwardsFilter = (reaction, user) =>reaction.emoji.name === '🔵' && user.id === message.author.id;

                const backwars = msg.createReactionCollector(backwarsFilter, { time: 6000000 });
                const forwards = msg.createReactionCollector(forwardsFilter, { time: 6000000 });

                backwars.on('collect', r => {
                    
                        x = x + 1;
                        if (x > [BO - 1]) {

                    let embed = new Discord.RichEmbed()
                    embed.setAuthor(message.author.tag, message.author.displayAvatarURL)
                    embed.setColor("C")
                    embed.setDescription("**Victoire de l'équipe** " + NomA + " **Score final**" + "  "+ x +"  "+ "à " +y);
                    msg.delete(embed)
                    message.channel.send(embed)
                    
                } 
                        else {
                  let embed = new Discord.RichEmbed()
                    embed.setAuthor(message.author.tag, message.author.displayAvatarURL)
                    embed.setColor("RED")
                    embed.setDescription("Premier à " + BO)
                    embed.addField("**Score de l'équipe:** " + NomA, x);
                    embed.addField("**Score de l'équipe:** " + NomB, y);
                    msg.edit(embed)
                }
              })

                forwards.on('collect', r => {
                    y = y + 1;
                    if (y > [BO - 1]) {
                      let embed = new Discord.RichEmbed()
                      embed.setAuthor(message.author.tag, message.author.displayAvatarURL)
                      embed.setColor("GREEN")
                      embed.setDescription("**Victoire de l'équipe** " + NomB + " **Score final**" + "  "+ y +"  "+ "à " + x);
                      msg.delete(embed)
                      message.channel.send(embed)
                    }
                  else {
                    let embed = new Discord.RichEmbed()
                embed.setAuthor(message.author.tag, message.author.displayAvatarURL)
                embed.setColor("BLUE")
                embed.setDescription("Premier à " + BO)
                embed.addField("**Score de l'équipe:** " + NomA, x);
                embed.addField("**Score de l'équipe:** " + NomB, y);
                msg.edit(embed)
          

  
                  }
              })

        
            })
            
    })
    }
  })

