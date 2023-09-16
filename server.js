const express = require('express');
const app = express();

const expresesLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expresesLayouts);
app.use(express.static('public'));

// routes
const indexRoute = require('./routes/index');

app.get('/', indexRoute);

app.listen(process.env.PORT || 8000);
