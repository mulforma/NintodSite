"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import fastify
const fastify_1 = __importDefault(require("fastify"));
// Define app
const app = fastify_1.default({
    logger: true
});
// Get port
const port = process.env.PORT || 3000;
// Listen on port
app.listen(port, () => {
    // Log port
    console.log(`🎉 Access your website at http://localhost:${port}/`);
});
//# sourceMappingURL=server.js.map