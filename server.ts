// Import fastify
import fastify, {FastifyRequest} from 'fastify';
// Import knex database
import { database } from './database/database';
// Define app
const app = fastify();
// Get port
const port = process.env.PORT || 3000;

// Listen on port
app.listen(port, () => {
  // Log port
  console.log(`🎉 Access your website at http://localhost:${port}/`);
});

// Get request at "/"
app.get("/", (req, res) => {
  // Redirect to "https://github.com/thevvx/Nintod"
  res.redirect("https://github.com/thevvx/Nintod");
});

// Get request at "/api/v1/users"
app.get("/api/v1/users", (req, res) => {
  // Get users from database
  database.select("*").from("user").then(users => {
    // Send users
    res.send(users);
  });
});

// Get request at "/api/v1/users/:id"
app.get("/api/v1/users/:id", (req, res) => {
  // Get user from database
  database("user").where("userId", (req.params as FastifyRequest).id).then(user => {
    // Send user
    res.send(user);
  });
});

// Get request to "/api/v1/globalItems"
app.get("/api/v1/globalItems", (req, res) => {
  // Get global items from database
  database.select("*").from("globalItems").then(globalItems => {
    // Send global items
    res.send(globalItems);
  });
});

// Get request to "/api/v1/globalItems/:id"
app.get("/api/v1/globalItems/:id", (req, res) => {
  // Get global item from database
  database("globalItems").where("globalItemId", (req.params as FastifyRequest).id).then(globalItem => {
    // Send global item
    res.send(globalItem);
  });
});

// Get request to "/api/v1/officialShop"
app.get("/api/v1/officialShop", (req, res) => {
  // Get official shop from database
  database.select("*").from("officialShop").then(officialShop => {
    // Send official shop
    res.send(officialShop);
  });
});

// Get request to "/api/v1/jobs"
app.get("/api/v1/jobs", (req, res) => {
  // Get jobs from database
  database.select("*").from("jobs").then(jobs => {
    // Send jobs
    res.send(jobs);
  });
});