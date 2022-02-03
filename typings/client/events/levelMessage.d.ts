import BaseClient from '../BaseClient';
import { Client } from 'discord.js';
export default class levelMessage extends BaseClient {
    client: Client;
    constructor(client: Client);
    handle(data?: object): void;
}
