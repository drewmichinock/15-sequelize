// require mysql dependency
var mysql = require("mysql");

// create connection for database
var connection = mysql.createConnection({

    // identify host, port, user, password and database
    host: "localhost",
    port: 3000,
    user: "root",
    password: "gattsu15",
    database: "burgers_db"

});

// make connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// export connection for orm to use
module.exports = connection;