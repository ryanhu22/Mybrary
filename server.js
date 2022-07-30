// Playlist:
// https://www.youtube.com/watch?v=qj2oDkvc4dQ&list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM&index=5

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// Import routers
const indexRouter = require('./routes/index') // takes relative path (./)

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') // server render views
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public')) // public views

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
}) // don't want to hard code db url so use env
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose'))

// Routers
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)