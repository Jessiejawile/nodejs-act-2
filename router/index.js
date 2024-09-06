const express = require('express');
const router = express.Router();

// Render the home page (index.ejs)
router.get('/', (req, res) => {
  res.render('index');
});

// Render the about page (about.ejs)
router.get('/about', (req, res) => {
  res.render('about');
});

// Handle form submission
router.post('/submit', (req, res) => {
  const { name } = req.body;
  res.send(`Form submitted successfully! Hello, ${name}!`);
});

module.exports = router;
