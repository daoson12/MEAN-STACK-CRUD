const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db');
const employee = require('./modeljs/employee');
const employeeController = require('./controllers/employeeController');
const cors = require('cors')
    // const db = require('./db')
const PORT = 3000
app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/employees', employeeController);
app.listen(PORT, () => console.log('server running on localhost: ' + PORT));