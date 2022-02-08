const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: "setup",
    cooldown: 5,
    aliases: ["create"],

    run: async function(client, message, args) {
        try {
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            var ticketChannel = message.mentions.channels.first() || client.channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name == args[0]) || message.channel;
            var adminRole = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1]) || message.guild.roles.cache.find(r => r.name == args[1]);
            var title = message.content.split(' ').slice(3).join(' ') || 'Erdem Çakıroğlu Ticket Sistemi';
            if (!adminRole) {
                message.channel.send({
                    embed: {
                        title: `❌ | yanlış kullanım`,
                        description: `⚠ | doğru kullanım: ${prefix}kurulum <Bilet Kanalı> <Yöneticilerin Rolü> <Bilet Mesaj Başlığı>`,
                        color: 0xFF0000
                    }
                }).then(async function(msg) {
                    setTimeout(() => {
                        msg.delete().catch(err => { return })
                    }, 1000 * 7);
                })

                return
            }
            message.react('✅');
            let btn = new MessageButton()
                .setStyle("blurple")
                .setEmoji("✅")
                .setLabel(' Ticket Açmak İçin Tıkla')
                .setID("createTicket")
            let row = new MessageActionRow()
                .addComponent(btn);
            ticketChannel.send({
                embed: {
                    color: 0x00fff3,
                    description: 'Ticket Acmak İçin Aşağıdaki Butona Basman Yeterli.',

                    title: title,

                },         
                component: row
            }).then(async function() {
                require('quick.db').set(`TicketAdminRole_${message.guild.id}`, adminRole.id);
            })
        } catch (err) {
            return;
        }
    }
}
