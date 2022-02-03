"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("./BaseClient"));
const discord_js_1 = require("discord.js");
const { Events } = require('../util/Defines');
class LevelClient extends BaseClient_1.default {
    constructor(client, prefix, db = {}) {
        super();
        this.client = client;
        this.prefix = prefix;
        if (typeof this.db[0] === "undefined") {
            this.db = {
                xp: 68,
                limitXP: 100,
                defaultLevel: 1,
            };
        }
        this.handle(db, () => this.emit(Events.LEVEL_CREATED, discord_js_1.Message, db));
    }
}
exports.default = LevelClient;
//# sourceMappingURL=Client.js.map