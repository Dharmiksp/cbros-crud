const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./connection');
const family = require('./family');
const user = require('./user');

var app = express();
app.use(bodyParser.json());


app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    );
    next();
  });
app.use('/family', family);
app.use('/user', user);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));