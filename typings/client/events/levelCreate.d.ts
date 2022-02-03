import BaseClient from '../BaseClient';
import { Client } from 'discord.js';
export default class levelCreate extends BaseClient {
    client: Client;
    constructor(client: Client);
    handle(data: object): void;
}
