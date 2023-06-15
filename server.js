const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

// app.use(express.static('public'));

// GET * Route
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for notes api
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/db/db.json'))
});

// POST Route for notes api
app.post('/api/notes', (req, res) => {
    // add read, push, write functions
    res.sendFile(path.join(__dirname, '/db/db.json'))
});

// start server
app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT} 🚀`)
);
