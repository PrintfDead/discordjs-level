"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json5_1 = __importDefault(require("json5"));
const fs_1 = __importDefault(require("fs"));
const node_events_1 = __importDefault(require("node:events"));
const levelCreate_1 = __importDefault(require("../libs/levelCreate"));
const levelMessage_1 = __importDefault(require("../libs/levelMessage"));
class Base extends node_events_1.default {
    constructor(Client, prefix) {
        super();
        this.client = Client;
        this.prefix = prefix;
        this.database = json5_1.default.parse(fs_1.default.readFileSync(__dirname + '/../json/bd.json', 'utf8'));
        this.client.on('messageCreate', async (message) => {
            if (message.author.bot)
                return;
            this.client.emit('levelCreate', message);
        });
        this.data = this.database;
        (0, levelCreate_1.default)(this.client);
        (0, levelMessage_1.default)(this.client, this.prefix);
    }
}
exports.default = Base;
//# sourceMappingURL=Client.js.map