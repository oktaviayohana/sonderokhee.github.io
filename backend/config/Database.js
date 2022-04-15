import { Sequelize } from "sequelize";

const db = new Sequelize({
    host: '127.0.0.1',
    username: 'scribbleAdmin',
    password: 'AdminPassword',
    database: 'scribblenotes',
    dialect: 'mysql'
});

export default db;