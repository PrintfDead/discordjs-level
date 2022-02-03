"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("./client/BaseClient")); // Import the Base class
const Client_1 = __importDefault(require("./client/Client"));
const data = require("./json/data.json");
exports.BaseClient = BaseClient_1.default;
exports.Client = Client_1.default;
exports.data = data;
//# sourceMappingURL=index.js.map