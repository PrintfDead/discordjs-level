/// <reference types="node" />
import { Client as client } from 'discord.js';
import events from 'node:events';
/**
 * @types {BaseData} object
 * @param client {Client Class}
 * @param data {BaseData Type}
 * @param prefix {string}
 * @param database {object}
 */
declare type BaseData = object;
export default class Base extends events {
    client: client;
    protected database: object;
    data: BaseData;
    prefix: string;
    constructor(Client: client, prefix: string);
}
export {};
