const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/mainRouter');

app.use(express.static(path.join(__dirname + '/../public/')));

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor Funcionando');
})

app.use('/', mainRouter);
app.use('/login', mainRouter);
app.use('/register', mainRouter);



