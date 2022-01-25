"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const json5_1 = __importDefault(require("json5"));
/**
 * Se actualizan valores del archivo JSON añadiendo los datos de xp.
 */
const db = json5_1.default.parse(fs_1.default.readFileSync(__dirname + '/../json/bd.json', 'utf8'));
function levelCreate(client) {
    client.on('levelCreate', (message) => {
        if (message.channel.type === "DM")
            return;
        if (!db[message.guild.me.id + message.author.id]) {
            db[message.guild.me.id + message.author.id] = {
                xp: 0,
                level: 0,
                limitLevelUp: 50,
            };
        }
        db[message.guild.me.id + message.author.id].xp += Math.floor(Math.random() * 7) + 3;
        let infoBD = db[message.guild.me.id + message.author.id];
        if (infoBD.xp > 50) {
            infoBD.limitLevelUp *= 2;
            infoBD.level++;
            infoBD.xp = 0;
        }
        fs_1.default.writeFile(__dirname + '/../json/bd.json', json5_1.default.stringify(db), (x) => {
            if (x)
                console.error(x);
        });
    });
}
exports.default = levelCreate;
//# sourceMappingURL=levelCreate.js.map