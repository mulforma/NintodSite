// Get .env config
import 'dotenv/config';
// Import knex
import knex from 'knex';
// Connect knex to database
export const database = knex({
  client: 'cockroachdb',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    ssl: true,
  },
});
