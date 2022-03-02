const express = require('express')
const app = express()


//EJS
const ejs = require('ejs');

app.engine('.ejs', ejs.__express);
app.set('views',__dirname+'/views');



//Routes
const frontRoutes = require('./routes/FrontRoutes')

app.use('/', frontRoutes)

app.listen(3000)