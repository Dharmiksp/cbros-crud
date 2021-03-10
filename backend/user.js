const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
const mysqlConnection = require('./connection');

Router.use(bodyParser.json());

Router.get ('/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM person WHERE id = ?', [req.params.id],function (error, rows, fields) {
        if(rows.length <= 0) res.status(404).send('Unfound ID')
        else res.send(rows);
    })
});

module.exports = Router; 