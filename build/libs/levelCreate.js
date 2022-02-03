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
            level: data.defaultLevel,
            limitXP: data.limitXP,
        };
    }
    db[message.guild.id + message.author.id].xp += data.xp;
    if (db[message.guild.id + message.author.id].xp >= db[message.guild.id + message.author.id].limitXP) {
        db[message.guild.id + message.author.id].xp = 0;
        db[message.guild.id + message.author.id].level++;
        db[message.guild.id + message.author.id].limitXP *= 2;
        client.emit('levelMessage', message, db, message.author);
    }
    fs_1.default.writeFileSync(__dirname + '/../json/data.json', json5_1.default.stringify(db, (x) => {
        if (x)
            new Error(x);
        if (typeof x === "undefined")
            return undefined;
    }));
});
/*export default function levelCreate(exp: number) {
    client.on('levelCreate', (message: Message | any) => {
        if (message.channel.type === "DM") return;

        if (!db[message.guild.me.id + message.author.id]) {
            db[message.guild.me.id + message.author.id] = {
                xp: 0,
                level: 0,
                limitLevelUp: 50,
            };
        }

        db[message.guild.me.id + message.author.id].xp += exp;

        let infoBD = db[message.guild.me.id + message.author.id];

        if(infoBD.xp > 50) {
            infoBD.limitLevelUp *= 2;
            infoBD.level++;
            infoBD.xp = 0;
        }

        fs.writeFile(__dirname + '/../json/bd.json', JSON.stringify(db), (x: any) => {
            if (x) console.error(x);
        })
    });
}*/ 
//# sourceMappingURL=levelCreate.js.map