# DiscordJS-level Module
### Usage in TypeScript
```ts
import Discord from 'discord.js';
const intents = new Discord.Intents(32767); // Intents Flags
const client = new Discord.Client({ intents }); // Client

import { Client } from 'discordjs-level';
// You can place the amount of EXP a user gets per message

/**
 * @decrepated new Base(client, 'prefix', exp: number);
 * @new new Client(client, prefix: string, data: object);
 */
const App = new Client(client, 'prefix', {xp: 68, limitXp: 100, defaultLevel: 1}); // Client, Prefix, Object: XP for Message | default 68, limitXP for level up default 100, defaultLevel for level default 1

// To access the data you can use
/**
 * @decrepated App.data
 * @new App.getData()
 */
let data = App.getData();
data[<Message>.guild.id + <Message>.author.id].xp
/*
{
    id_guild: {
        id_user: {
            xp: data,
            limitXP: data,
            level: data 
        }
    }
}
*/
// Or use
App.db[<Message>.guidl.id + <Message>.author.id].xp

/**
 * @new App.on('levelMessage' (msg) => {});
 */
// The event is emitted when a user levels up
// It was created so that you can edit the message or do it your way when a user levels up
// Message for Discord Message Class, db for JSON Data, user for Discord User Class
App.on('levelMessage', (message: Discord.Message, db: any, user: Discord.User) => {
    message.channel.send('WOW, ' + user.tag + ' Level UP ' + db[message.guild.id + user.id].level);
}) 
```

### In JavaScript it is the same but without the import
```js
const Discord = require('discord.js'); // Import discordjs
const intents = new Discord.Intents(32767); // Config intents
const client = new Discord.Client({ intents }); // Client config

const { Client } = require('discordjs-level'); // Import discordjs-level

/**
 * @decrepated new Base(client, 'prefix', exp: number);
 * @new new Client(client, prefix: string, data: object);
 */
const App = new Client(client, 'prefix', {xp: 68, limitXp: 100, defaultLevel: 1}); // Client, Prefix, Object: XP for Message | default 68, limitXP for level up default 100, defaultLevel for level default 1

// To access the data you can use
/**
 * @decrepated App.data
 * @new App.getData()
 */
let data = App.getData();
/*
data[<Message>.guild.id + <Message>.author.id].xp;
Or use
App.db[<Message>.guidl.id + <Message>.author.id].xp;
{
    id_guild: {
        id_user: {
            xp: data,
            limitXP: data,
            level: data 
        }
    }
}
*/

/**
 * @new App.on('levelMessage' (msg) => {});
 */

App.on('levelMessage', (message, db, user) => {
    message.channel.send('WOW, ' + user.tag + ' Level UP ' + db[message.guild.id + user.id].level);
})

```

## It was done with the purpose of simplifying the use of the experience

[My GitHub](https://github.com/PrintfDead)

[My Discord](https://dsc.bio/printf)

[My Web](https://proximamente.com)

[My Discord Bot](https://discord.gg/EaKnJC2Me7)