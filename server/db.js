import pg from "pg";

const DB = new pg.Client({
    user: 'me',
    host: 'localhost',
    database: 'week10',
    password: 'password',
    port: 5432
});

export default DB;