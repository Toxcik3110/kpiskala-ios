// mongodb://<dbuser>:<dbpassword>@ds231559.mlab.com:31559/kpiskala

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    const myAwesomeDB = database.db('kpiskala')
    // myAwesomeDB.collection('theCollectionIwantToAccess')
    require('./app/routes')(app, myAwesomeDB);
    app.listen(port, () => {
      console.log('We are live on ' + port);
    });               
  })