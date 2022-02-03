import BaseClient from "./BaseClient";
import { Client } from 'discord.js';
export default class LevelClient extends BaseClient {
    client: Client;
    prefix: string;
    protected data: any;
    constructor(client: Client, prefix: string, data?: any);
}
