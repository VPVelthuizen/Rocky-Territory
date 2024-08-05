const express = require('express');
const db = require('./config/connection');
const routes = require('./routes/api');
const { connection } = require('mongoose');

const app = express();
const PORT = 3001;

db.connect();

// Set up routes
app.use(express.json());
app.use(routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});