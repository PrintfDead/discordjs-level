import BaseClient from "./BaseClient";
import { Client } from 'discord.js';
export default class LevelClient extends BaseClient {
    client: Client;
    prefix: string;
    constructor(client: Client, prefix: string, db?: any);
}
