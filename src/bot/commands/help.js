const { MessageEmbed } = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');
const { pırlanta, mavitac } = require('../../config/bot')

module.exports = {
    name: "tyardım",
    cooldown: 5,
    aliases: ["ticketyardım","tyardım"],

    run: async(client, message) => {

        var embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        .setColor('#5555dd')
        .setTimestamp()
        .addFields(
            {
                name: `:star2: KOMUTLAR`,
				
                value: `
                       ${pırlanta}, ${mavitac} \`.Setup\` **Ticket Kurar.**\n<a:rainbow:838755853271564358>  \`.Open\` **Ticket Oluşturur.**\n<a:rainbow:838755853271564358>  \`.Add\` **Ticket Üye Veya Rol Ekler.** \n<a:rainbow:838755853271564358>  \`.Remove\` **Kanal İzinlerini Siler.** \n<a:rainbow:838755853271564358>\`.Prefix\` **Prefix Değiştirir** \n<a:rainbow:838755853271564358> \`.Ping\` **Mesaj Gecikmesini Gösterir **`,

                inline: false
            }
            
        )
        .setThumbnail(message.guild.iconURL({ dynamic: true }));
        var button = new MessageButton()
        .setStyle('url')
        .setLabel('Discord')
        .setURL('https://discord.gg/fsqnmYrcB8');
        var btuton = new MessageButton()
        .setStyle('url')
        .setLabel('Davet')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
        var row = new MessageActionRow()
        .addComponents([button, btuton]);
        return message.channel.send({ embed: embed, components: [row] });
    }
}