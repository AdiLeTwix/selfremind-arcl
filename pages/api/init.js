import config from '../../config/mysql';
var mysql = require('mysql2');
var fs = require('fs');
var readline = require('readline');

const sqlToString = async (path = "") => {  //convert sql file into string
    return new Promise((resolve) => {

        var statements = "";

        var rl = readline.createInterface({
            input: fs.createReadStream(path),
            terminal: false
        });

        rl.on('line', function (chunk) {
            statements += chunk.toString('ascii');
        });

        rl.on('close', function () {
            resolve(statements);
        });
    });
}

export default function handler(req, res) {
    var con = mysql.createConnection(config);
    con.connect(function (err) {
        if (err) {
            console.error("Database connection failed:", err);
            return res.status(500).json({ error: "Failed to connect to the database" });
        }
        con.query("SHOW TABLES;", function (err, result) {
            if (err) { res.status(401).json({ err: err }); };
            if (result.length === 0) {
                sqlToString("./config/init.sql").then((statements) => {
                        if (err) {
                            res.status(401).json({ err: err });
                        };
                        con.query(statements, function (err, result) {
                            if (err) { res.status(401).json({ err: err }); };
                            res.status(200).json({ result: result })
                        });
                });
            } else {
                res.status(200).json({ result: result })
            }
        });
    });



}