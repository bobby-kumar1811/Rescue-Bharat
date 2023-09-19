if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/app/pages')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('app/public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const routes = require('./app/lib/routing').Router(__dirname + '/app/routes')
app.use('/', routes.find('index'))
app.use('/register', routes.find('register'))
app.use('/login', routes.find('login'))

app.listen(process.env.PORT || 8000)
