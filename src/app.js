const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/main');
const formulariosRouter= require('./routers/formularios')

app.use(express.static(path.join(__dirname + '/../public/')));

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor Funcionando');
})

app.use('/', mainRouter);
app.use('/login', formulariosRouter);
app.use('/register', formulariosRouter);



