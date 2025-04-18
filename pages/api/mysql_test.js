import config from '../../config/mysql';
var mysql = require('mysql2');

export default function handler(req, res) {
    var statements = "SELECT * FROM items;";

    var con = mysql.createConnection(config);

    con.connect(function (err) {
        if (err) {
            res.status(200).json({ err: err });
        };
        con.query(statements, function (err, result) {
            if (err) { res.status(200).json({ err: err }); };
            res.status(200).json({ result: result, req: req.query })
        });
    });
}