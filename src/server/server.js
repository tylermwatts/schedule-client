const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const employeeService = require('./services/employeeService');
const routeConfig = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routeConfig(app);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3001);
