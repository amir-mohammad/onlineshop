const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const expressHBS = require('express-handlebars');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.engine('.hbs',expressHBS({defaultLayout:'layout',extname:'.hbs'}));
app.set('view engine','.hbs');

app.use('/',require('./routes/index'));


connectDB();

app.listen(8900,() =>{
    console.log("server is running");
});

