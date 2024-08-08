const express = require('express');
const db = require('./config/connection');
const thoughtRoutes = require('./routes/thoughtRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3001;

// Set up routes
app.use(express.json());
app.use(userRoutes);
app.use(thoughtRoutes);

// Start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});