const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

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
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => { res.render('home') });
app.get('/search', (req, res) => {
    console.log('Result: ', req.query);
    res.render('search');
});
app.post('/search', (req, res) => {
    console.log('Result with post: ', req.body);
    res.render('search');
});
app.get('/news', (req, res) => { res.render('news') });

app.listen(port, () => console.log(`Example express listening http://localhost:${port}`));