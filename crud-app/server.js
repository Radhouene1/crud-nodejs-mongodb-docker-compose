require('dotenv').config();
require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/employeeController');

var app = express();

// Middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Set up views and layouts
app.set('views', path.join(__dirname, 'views'));

app.engine('hbs', exphbs({ 
  extname: 'hbs', 
  defaultLayout: 'mainLayout', 
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
}));

app.set('view engine', 'hbs');

// Redirect the root URL to /employee/list
app.get('/', (req, res) => {
  res.redirect('/employee/list');
});

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Use employee controller
app.use('/employee', employeeController);
