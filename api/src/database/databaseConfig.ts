const {DATABASE_HOST, DATABASE_PASS, DATABASE_TYPE, DATABASE_USER, DATABASE_PORT, DATABASE_NAME} = process.env;
const rootDir = `${__dirname}/..`;

const config = {
    sqlite: {
        type: DATABASE_TYPE,
        database: `${rootDir}/database/database.sqlite`,
    },
    mysql: {
        type: DATABASE_TYPE,
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        username: DATABASE_USER,
        password: DATABASE_PASS,
        database: DATABASE_NAME,
    }
};

const defaultConfig = {
    name: "default",
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
};

const development = {
    ...config[DATABASE_TYPE],
    ...defaultConfig,
};

const homolog = {
    /* @Todo definir */
    ...defaultConfig
};

const production = {
    /* @Todo definir */
    ...defaultConfig
};

const databaseConfig = {development};

export default databaseConfig;
