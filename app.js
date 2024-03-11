const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const mainPage=require('./route/main');
const loginPage=require('./route/admin');

app.use(bodyParser.urlencoded());


app.use(loginPage);
app.use(mainPage);



app.listen(3000);