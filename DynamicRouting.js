const express = require('express');
const app = express();
const PORT = 3001;

// Middleware to serve static files (for CSS if needed)
app.use(express.static('public'));

// Set up the view engine (optional, if you want to use templates)
// app.set('view engine', 'ejs'); // Uncomment if using EJS or any other templating engine

// Home route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dynamic Routing Example</title>
        <style>
            body{
                align-items: center;
               
                text-align: center;
                justify-content: center;
            }
                </style>
    </head>
    <body>

        <h1>Welcome to the Home Page</h1>

        <button onclick="location.href='/about'">About</button>
        <button onclick="location.href='/contact'">Contact</button>
        <button onclick="location.href='/services'">Services</button>
        <button onclick="location.href='/portfolio'">Portfolio</button>
    </body>
    </html>
  `);
});

// About route
app.get('/about', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About Page</title>
    </head>
    <body>
        <h1>About Us</h1>
        <p>This is the about page.</p>
        <button onclick="location.href='/'">Home</button>
    </body>
    </html>
  `);
});

// Contact route
app.get('/contact', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Page</title>
    </head>
    <body>
        <h1>Contact Us</h1>
        <p>This is the contact page.</p>
        <button onclick="location.href='/'">Home</button>
    </body>
    </html>
  `);
});

// Services route
app.get('/services', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Services Page</title>
    </head>
    <body>
        <h1>Our Services</h1>
        <p>This is the services page.</p>
        <button onclick="location.href='/'">Home</button>
    </body>
    </html>
  `);
});

// Portfolio route
app.get('/portfolio', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Page</title>
    </head>
    <body>
        <h1>Our Portfolio</h1>
        <p>This is the portfolio page.</p>
        <button onclick="location.href='/'">Home</button>
    </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});