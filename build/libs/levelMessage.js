"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const discord_js_1 = __importDefault(require("discord.js"));
/**
 * Se envia un cartel de nivel con algunos datos.
 */
const canvacord = require("canvacord");
function levelMessage(bot, prefix) {
    bot.on('lvlMessage', (message) => {
        if (message.content === `${prefix}rank`) {
            let db = JSON.parse(fs_1.default.readFileSync(__dirname + '/../json/bd.json', 'utf8'));
            if (!db[message.guild.me.id + message.author.id]) {
                db[message.guild.me.id + message.author.id] = {
                    xp: 0,
                    level: 0,
                    limitLevelUp: 50,
                };
            }
            const rank = new canvacord.Rank()
                .setAvatar(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
                .setCurrentXP(db[message.guild.me.id + message.author.id].xp)
                .setLevel(db[message.guild.me.id + message.author.id].level)
                .setRank(0, '#a254e3', false)
                .setStatus('offline', false, 0)
                .setRequiredXP(100 - db[message.guild.me.id + message.author.id].xp)
                .setProgressBar("#a254e3", "COLOR")
                .setUsername(message.author.username)
                .setDiscriminator(message.author.discriminator);
            rank.build()
                .then((data) => {
                const attachment = new discord_js_1.default.MessageAttachment(data, "RankCard.png");
                message.channel.send(attachment);
            }).catch((err) => console.log('Error: ' + err));
            // let memberInfo = lvl[member.id]
            // let embed2 = new Discord.MessageEmbed()
            //     .addField("Level", memberInfo.level)
            //     .addField("XP", memberInfo.xp+"/100")
            // message.channel.send(embed2)
        }
    });
}
exports.default = levelMessage;
//# sourceMappingURL=levelMessage.js.map