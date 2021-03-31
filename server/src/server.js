const express = require('express');
const config = require('config');
const cors = require('cors');

const connectDB = require('./db');

const PORT = config.get('PORT');
const server = express();

// Connect Database
connectDB();

// Init Middlewares
server.use(cors());
server.use(express.json());


// Define Api Route
server.use('/api', require('./routes/api'));

// Start Server
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
