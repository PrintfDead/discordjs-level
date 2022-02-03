"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitter = void 0;
const json5_1 = __importDefault(require("json5"));
const fs_1 = __importDefault(require("fs"));
const node_events_1 = __importDefault(require("node:events"));
class Emitter extends node_events_1.default {
    constructor() {
        super();
        this.db = json5_1.default.parse(fs_1.default.readFileSync(__dirname + '/../json/data.json', 'utf8'));
        /**
         * ! data Decrepated
         * * @new <App>.db[<Guild>.id + <User>.id]
         * @method getData();
         * @method {setData}(data: any, guild: Guild | any, user: User | any);
         * @returns object, and arrays
         * TODO: Delete data, use db instead, and fix events
         */
        this.data = new Error('Client#data decrepated');
    }
    /**
     * get data for JSON Data
     * @class getData
     */
    get getData() {
        return this.db;
    }
    /**
     * set data for JSON Data
     * @class setData
     * @param data: object
     * @param guild: Guild Class for DiscordJS
     * @param user: User Class for DiscordJS
     */
    setData(data, guild, user) {
        if (typeof data[0] === "undefined") {
            new TypeError('data is undefined');
        }
        if (typeof guild === "undefined") {
            new TypeError('guild is undefined');
        }
        if (typeof user === "undefined") {
            new TypeError('user is undefined');
        }
        if (!this.db[guild.id + user.id]) {
            return this.db[guild.id + user.id] = data;
        }
        new TypeError('The user already exist');
        return this;
    }
    handle(data, action) {
        action(data);
    }
}
exports.Emitter = Emitter;
exports.default = Emitter;
//# sourceMappingURL=BaseClient.js.map