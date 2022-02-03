/// <reference types="node" />
import EventEmitter from 'node:events';
export default class BaseClient extends EventEmitter {
    client: EventEmitter;
    db: object;
    constructor();
    getData(): any;
}
