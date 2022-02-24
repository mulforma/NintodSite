// Import fastify
import fastify from 'fastify';
// Import knex database
import { database } from './database/database.js';
// Import pointOfView
import pointOfView from 'point-of-view';
// Import fastify-static
import fastifyStatic from 'fastify-static';
// Import path
import path from 'path';
// Import ejs
import ejs from 'ejs';
// Define app
const app = fastify();
// Get port
const port = process.env.PORT || 3000;

// Listen on port
app.listen(port, "0.0.0.0", (err, address) => {
  // Handle error
  if (err) {
    console.error(err);
    process.exit(1);
  }
  // Log port
  console.log(`🎉 Access your website at ${address}`);
});

// Register public folder
app.register(fastifyStatic, {
  root: path.join(process.cwd(), 'public'),
  prefix: '/public/',
})

// Register view engine
app.register(pointOfView, {
  engine: {
    ejs: ejs,
  },
});

// Get request at "/"
app.get("/", (req, res) => {
  // Render view
  res.view('/template/index.ejs', {
    title: 'The Nintod Project',
  });
});

// Get request at "/about"
app.get("/about", (req, res) => {
  // Render view
  res.view('/template/about.ejs', {
    title: 'About',
  });
});

// Get request at "/contact"
app.get("/contact", (req, res) => {
  // Render view
  res.view('/template/contact.ejs', {
    title: 'Contact',
  });
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
  database("user").where("userId", req.params.id).then(user => {
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
  database("globalItems").where("globalItemId", req.params.id).then(globalItem => {
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

// Handle error
app.get("*", (req, res) => {
  // Render view
  res.view("/template/_error.ejs", { title: "The Notfound Project", statusCode: 404, message: "Page not found" });
});