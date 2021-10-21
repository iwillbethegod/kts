const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "diljit",
  aliases: ["dl"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();
    const { channel } = message.member.voice;
    channel.join();
    return message.channel.send(";p https://www.youtube.com/playlist?list=PL4ZTAx7phxNnTOd4Rn9wyM9QfrrxKJWHz").catch(console.error);
  }
};