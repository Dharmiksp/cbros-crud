const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    database: "cbros",
    password: "Mission@2020",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err) { 
        console.log("Connected");
    } 
    
    else {
        console.log('Failed');
    }
})

module.exports = mysqlConnection;