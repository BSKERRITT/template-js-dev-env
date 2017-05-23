import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Connection to database otherwise.
  res.json([
    {"id": 1,"firstName":"BillyJoe","lastName":"Tooly","email":"bjtooly69@mail.com"},
    {"id": 2,"firstName":"Hety","lastName":"Moore","email":"hetym@mail.com"},
    {"id": 3,"firstName":"Gina","lastName":"VanHere","email":"vanhereg@mail.com"}
  ]);
});

app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
