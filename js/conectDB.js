var mysql = require("mysql");
var Ator

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hollywood",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("SELECT nomeAtor, idAtor FROM Ator", function (err, result, fields) {
  if (err) throw err;
  //console.log(result);
  Object.keys(result).forEach(function(key) {
      var ator = result[key];
      console.log(ator.nomeAtor, ator.idAtor)
    });
});

con.query("SELECT nomePais, idPais FROM Pais", function (err, result, fields) {
  if (err) throw err;
  //console.log(result);
  Object.keys(result).forEach(function(key) {
      var pais = result[key];
      console.log(pais.nomePais)
      console.log(pais.idPais)
    });
});
con.end();
