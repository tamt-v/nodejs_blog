const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebar = require('express-handlebars')
const handlebars = handlebar.create({extname: '.hbs'});
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, 'resources/public')));

//HTTP logger
app.use(morgan('dev'));

//Template engine
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/news', (req, res) => {
  res.render('news')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
});