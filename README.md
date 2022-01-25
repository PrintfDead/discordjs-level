# Inglish

### Usage in TypeScript
```ts
import Discord from 'discord.js';
const intents = new Discord.Intents(32767); // Intents Flags
const client = new Discord.Client({ intents }); // Client

import { Base } from 'discordjs-level';
// You can place the amount of EXP a user gets per message
const App = new Base(client, 'prefix', 40); // 1: Client 2: Your Prefix 3: XP Amount (Parameter number 3 is not mandatory)

// To access the data you can use
App.data; // Output > Object with level data
```

### In JavaScript it is the same but without the import
```js
const Discord = require('discord.js'); // Import discordjs
const intents = new Discord.Intents(32767); // Config intents
const client = new Discord.Client({ intents }); // Client config

const { Base } = require('discordjs-level'); // Import discordjs-level

const App = new Base(client, 'prefix'); // EXP Default = 68 x Message
```

# Español

### Uso en TypeScript
```ts 
import Discord from 'discord.js';
const intents = new Discord.Intents(32767); // Intents Permisos
const client = new Discord.Client({ intents }); // Cliente

import { Base } from 'discordjs-level';
// Puedes cambiar la cantidad de experiencia que recibe un usuario por mensaje
const App = new Base(client, 'prefix', 40); // 1: Cliente 2: Tu prefix 3: Cantidad de EXP (El parametro no es obligatorio)

// Para accedor a los datos usa
App.data; // Output > Objeto con datos de niveles
```

### Uso en JavaScript

```js
const Discord = require('discord.js'); // Importacion discordjs
const intents = new Discord.Intents(32767); // Configuracion intents
const client = new Discord.Client({ intents }); // Client configuracion

const { Base } = require('discordjs-level'); // Importacion discordjs-level

const App = new Base(client, 'prefix'); // XP por defecto = 68 por Mensaje
```

## Se hizo con la finalidad de simplificar el uso de la experiencia

## It was done with the purpose of simplifying the use of the experience

[My GitHub](https://github.com/PrintfDead)

[My Discord](https://dsc.bio/printf)

[My Web](https://proximamente.com)

[My Discord Bot](https://discord.gg/EaKnJC2Me7)