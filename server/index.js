// Development = node.js server + react server


// import and configure dotenv
require('dotenv').config();

// setting up express server
const express = require('express');
const app = express();
const cors = require('cors');

// connection to DB
const connection = require('./db');
connection();

// middleware
app.use(express.json());
app.use(cors());


// port set up
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));

