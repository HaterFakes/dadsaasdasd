const chalk = require('chalk');

module.exports = async function(client) {
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold(" Bot Tamam Ustam."));

    await client.user.setActivity('Erdem Çakıroğlu 💙');
    await client.user.setStatus("idle"); // dnd,idle,insivible
}
