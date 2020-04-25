require('dotenv').config();

import {$log, ServerLoader} from "@tsed/common";
import {getConnection} from "typeorm"
import {Server} from "./Server";

const rootDir = `${__dirname}/src`;

async function bootstrap() {
    try {
        $log.debug("Start server...");
        const server = await ServerLoader.bootstrap(Server);

        $log.debug("[Migrations] Running");
        const conn = getConnection("default");
        await conn.runMigrations();
        $log.debug("[Migrations] Runned");

        await server.listen();
        $log.debug("Server initialized");
    } catch (er) {
        $log.error(er);
    }
}

bootstrap();
