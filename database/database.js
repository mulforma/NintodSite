"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
// Get .env config
require("dotenv/config");
// Import knex
const knex_1 = __importDefault(require("knex"));
// Connect knex to database
exports.database = knex_1.default({
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
//# sourceMappingURL=database.js.map