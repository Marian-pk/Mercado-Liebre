// ************ Require's ************
const express = require('express');
const path = require('path');
const mainRouter = require('./routers/mainRouter');
const adminRouter = require('./routers/adminRouter');
const productRouter = require('./routers/productRouter');
const methodOverride = require ('method-override');

// ************ express() ************
const app = express();

// ************ Middlewares ************
app.use(express.static(path.join(__dirname + '/../public/')));
app.use (methodOverride('_method'));
app.use('/', mainRouter);
app.use('/login', mainRouter);
app.use('/register', mainRouter);
app.use('/admin',adminRouter);
app.use('/products',productRouter);

// ************ Template Engine ************
app.set('view engine', 'ejs');

// ************ Listen on provided port, on all network interfaces ************
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor Funcionando');
})






