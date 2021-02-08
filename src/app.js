const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routers/index');
const productsRouter = require('./routers/products');

app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname , './views'))

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static( path.join(__dirname, '../public')))

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/' , indexRouter)
app.use('/productos' , productsRouter)


app.listen(3000, function(){
    console.log("El servidor esta corriendo en el servidor 3000")
    console.log("http://localhost:3000")
})