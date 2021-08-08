const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "*****",
    user: "*****",
    database: "****",
    password: "******",
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
