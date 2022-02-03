"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../BaseClient"));
const discord_js_1 = require("discord.js");
const { Events } = require('../../util/Defines');
class levelCreate extends BaseClient_1.default {
    constructor(client) {
        super();
        this.client = client;
    }
    handle(data) {
        this.emit(Events.LEVEL_CREATED, discord_js_1.Message, data);
    }
}
exports.default = levelCreate;
//# sourceMappingURL=levelCreate.js.map