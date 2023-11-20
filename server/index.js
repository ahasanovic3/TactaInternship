require('dotenv').config();
const routes = require('./routes/routes');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.mongo_url;
const cors = require('cors');

var whitelist = ['http://localhost:3001']
var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 
  }
 
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors(corsOptions))
app.use(express.json());
app.use('/api', routes)
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
