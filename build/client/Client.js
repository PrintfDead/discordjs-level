"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("./BaseClient"));
const { levelCreate } = require('../util/Defines');
class LevelClient extends BaseClient_1.default {
    constructor(client, prefix, data = {}) {
        super();
        this.client = client;
        this.prefix = prefix;
        this.data = data;
        if (typeof this.data[0] === "undefined") {
            this.data = {
                xp: 68,
                limitXP: 100,
                defaultLevel: 1,
            };
        }
        new levelCreate(this.client).handle(this.data);
    }
}
exports.default = LevelClient;
//# sourceMappingURL=Client.js.map