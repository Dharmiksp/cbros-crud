const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
const mysqlConnection = require('./connection');

Router.use(bodyParser.json());

Router.get('/', (req, res) => {
    mysqlConnection.query("SELECT * FROM family ", (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
});

Router.get ('/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM person WHERE family_no = ?', [req.params.id],function (error, rows, fields) {
        if(rows.length <= 0) res.status(404).send('Unfound ID')
        else res.send(rows);
    })
});

Router.delete ('/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM person WHERE id = ?', [req.params.id],function (error, rows, fields) {
        if(rows.length <= 0) res.status(404).send('Unfound ID')
        else res.send(rows);
    })
});

Router.post ('/:id', (req, res) => {

    var name = req.body.person_name;
    var mob1 = req.body.mob_1;
    var mob2 = req.body.mob_2;
    var email = req.body.email_id;
    var fam = req.params.id;

    mysqlConnection.query(`INSERT INTO person (person_name, mob_1, mob_2, email_id, family_no ) values (?,?,?,?,?)`,[name, mob1, mob2, email, fam], function(error, rows, fields) {
        res.send(rows);
    });
});

Router.put ('/:id', (req, res) => {
    var name = req.body.person_name;
    var mob1 = req.body.mob_1;
    var mob2 = req.body.mob_2;
    var email = req.body.email_id;
    var pid = req.params.id 
   
    mysqlConnection.query('UPDATE person SET person_name = ?, mob_1 = ?, mob_2 = ?, email_id = ? WHERE id = ?', [name, mob1, mob2, email, pid], function(error, rows, fields) {
        res.send(rows);        
    })
})

module.exports = Router; 