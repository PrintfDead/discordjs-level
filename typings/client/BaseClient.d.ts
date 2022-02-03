/// <reference types="node" />
import { Message, User, Guild } from 'discord.js';
import EventEmitter from 'node:events';
/**
 * @class BaseClient
 * @param client EventEmitter
 */
export interface EmitterEvents {
    levelCreated: [message: Message, data: object];
    levelMessage: [message: Message, db: any, user: User];
}
export declare interface Emitter {
    emit<K extends keyof EmitterEvents>(event: K, ...args: EmitterEvents[K]): boolean;
    on<K extends keyof EmitterEvents>(event: K, listener: (...args: EmitterEvents[K]) => void): this;
}
export declare class Emitter extends EventEmitter {
    db: any;
    data: Error;
    constructor();
    /**
     * get data for JSON Data
     * @class getData
     */
    get getData(): any;
    /**
     * set data for JSON Data
     * @class setData
     * @param data: object
     * @param guild: Guild Class for DiscordJS
     * @param user: User Class for DiscordJS
     */
    setData(data: any, guild: Guild | any, user: User | any): any;
    protected handle(data: object, action: (data: any) => any): void;
}
export default Emitter;
