const express = require('express')
const app = express()
const csurf = require('csurf')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')


// setup route middlewares
var csrfProtection = csurf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })
//Parse cookies
app.use(cookieParser())

//EJS
const ejs = require('ejs');

app.engine('.ejs', ejs.__express);
app.set('views',__dirname+'/views');




//Routes
const frontRoutes = require('./routes/FrontRoutes')

app.use('/', frontRoutes)

app.listen(3000)