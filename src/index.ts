'use strict';

import {Server, Socket} from "socket.io";
import {App} from '@tinyhttp/app';
import {logger} from './logger';

import * as fs from 'fs';
if (!fs.existsSync('./src/test.ts')) {
    logger.error(`NOK: No  ./src/test.ts`);
}

const port = 3000;

const app = new App();
const s1 = app
    .get('/', (_, res) => void res.send('<h1>Hello World</h1>'))
    .listen(port, () => console.log(`Started on http://localhost:${port}!`));
;

const io = new Server(s1, {
    cors: {
        origin: 'localhost',
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.on("connection", (socket: Socket) => {
    // ...
});

logger.info('OK: end.');
console.log('end.');