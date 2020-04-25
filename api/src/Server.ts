import {
  GlobalAcceptMimesMiddleware,
  ServerLoader,
  ServerSettings
} from "@tsed/common";
import "@tsed/passport";
import "@tsed/swagger";
import "@tsed/typeorm";
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as methodOverride from "method-override";

const rootDir = __dirname;

@ServerSettings({
  rootDir,
  httpPort: 4000,
  httpsPort: false,
  acceptMimes: ["application/json"],
  mount: {
    '/api': "${rootDir}/controllers/**/*.ts",
  },
  componentsScan: [
    `${rootDir}/services/*{.ts,.js}`,
    `${rootDir}/repositories/*{.ts,.js}`,
    `${rootDir}/protocols/*{.ts,.js}`,
  ],
  typeorm: [
    {
      name: "default",
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "barber-app",
      logging: false,
      synchronize: true,
      entities: [
        `${rootDir}/entities/*{.ts,.js}`
      ],
      migrations: [
        `${rootDir}/database/migrations/*{.ts,.js}`,
        `${rootDir}/database/seeders/*{.ts,.js}`
      ],
      subscribers: [
        `${rootDir}/subscriber/*{.ts,.js}`
      ]
    }
  ],
  swagger: {
    path: "/api-docs",
    spec: {
      securityDefinitions: {
        "auth:basic": {
          type: "basic"
        }
      }
    }
  }
})
export class Server extends ServerLoader {

  $beforeRoutesInit(): void | Promise<any> {
    this
      .use(GlobalAcceptMimesMiddleware)
      .use(cors())
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));

    return null;
  }

}
