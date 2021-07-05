const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

const route = require('./routes/index.route');
const db = require('./config/db');

const app = express();
const port = 3000;

// Connect to DB
db.connect();

// Middleware to convert HTTP post with body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Path static
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () =>
    console.log(`App listening http://localhost:${port}`),
);
