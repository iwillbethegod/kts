const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "jai shree ram",
  aliases: ["jsr"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();
    const { channel } = message.member.voice;
    channel.join();
    return message.channel.send(";p https://www.youtube.com/playlist?list=PL4ZTAx7phxNnBE52LFa_T5_QITRU-5Wyj").catch(console.error);
  }
};