const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "BackgroundVibe",
  aliases: ["vb"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();
    const { channel } = message.member.voice;
    channel.join();
    return message.channel.send(";p https://www.youtube.com/playlist?list=PL4ZTAx7phxNlnHFGIF_sAO9yWSEkPJ93V").catch(console.error);
  }
};