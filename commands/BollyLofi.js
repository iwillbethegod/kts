const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "BollywoodLoFI",
  aliases: ["lofi"],
  description: i18n.__("help.description"),
  
  execute(message) {
    let commands = message.client.commands.array();
    const { channel } = message.member.voice;
    channel.join();
    return message.channel.send(";p https://www.youtube.com/playlist?list=PL4ZTAx7phxNm2Ayx_NCt2GnkB14l4I41c").catch(console.error);
  }
};