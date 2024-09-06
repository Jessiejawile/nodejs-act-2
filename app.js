const express = require('express');
const app = express();
const router = require('./router'); // Assuming the router file is named "routes.js"
const path = require('path');

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse URL-encoded data (for form submission)
app.use(express.urlencoded({ extended: true }));

// Use the router
app.use('/', router);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
