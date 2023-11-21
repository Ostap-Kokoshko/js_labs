require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const Pool = require('pg').Pool;
const pool = new Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "stadium_postgres"
});

module.exports = pool