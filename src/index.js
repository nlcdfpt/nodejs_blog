const path = require('path');
const express = require('express')
const exphbs  = require('express-handlebars');
const morgan = require('morgan')
const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => { res.render('home') })
app.listen(port, () => console.log(`Example express listening http://localhost:${port}`))