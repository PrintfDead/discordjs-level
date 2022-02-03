"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json5_1 = __importDefault(require("json5"));
const fs_1 = __importDefault(require("fs"));
const node_events_1 = __importDefault(require("node:events"));
class BaseClient extends node_events_1.default {
    constructor() {
        super();
        this.client = new node_events_1.default();
        this.db = json5_1.default.parse(fs_1.default.readFileSync(__dirname + '/../json/data.json', 'utf8'));
    }
    getData() {
        const data = json5_1.default.parse(fs_1.default.readFileSync(__dirname + '/../json/data.json', 'utf8'));
        return data;
    }
}
exports.default = BaseClient;
//# sourceMappingURL=BaseClient.js.map