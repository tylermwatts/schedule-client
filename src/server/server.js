const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const employeeService = require('./services/employeeService');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getOne', (req, res) => {
  req.body.id = '5d07bfbba977fc04e4676343';
  return employeeService.getEmployeeById(req, res);
});

app.get('/getAll', (req, res) => {
  return employeeService.getAllEmployees(req, res);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3001);
