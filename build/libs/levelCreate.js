"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../client/BaseClient"));
const fs_1 = __importDefault(require("fs"));
const json5_1 = __importDefault(require("json5"));
const client = new BaseClient_1.default();
/**
 * Se actualizan valores del archivo JSON añadiendo los datos de xp.
 */
const db = json5_1.default.parse(fs_1.default.readFileSync(__dirname + '/../json/bd.json', 'utf8'));
client.on('levelCreated', (message, data) => {
    if (message.channel.type === "DM")
        return;
    if (!db[message.guild.id + message.author.id]) {
        db[message.guild.id + message.author.id] = {
            xp: 0,
            level: data.defualtLevel,
            limitLevelUp: data.limitXP,
        };
    }
    db[message.guild.id + message.author.id].xp += data.xp;
    let infoBD = db[message.guild.id + message.author.id];
    if (infoBD.xp > db[message.guild.id + message.author.id].limitLevelUp) {
        infoBD.limitLevelUp *= 2;
        infoBD.xp = 0;
        infoBD.level++;
        client.emit('levelMessage', message, db, message.author);
    }
    fs_1.default.writeFile(__dirname + '/../json/bd.json', json5_1.default.stringify(db), (x) => {
        if (x)
            console.error(x);
    });
});
//# sourceMappingURL=levelCreate.js.map