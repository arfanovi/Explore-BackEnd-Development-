// server/index.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'client' folder
app.use(express.static(path.join(__dirname, '../client')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });


// Example API route
app.get('/api', (req, res) => {
  res.send('Hello from the server API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


