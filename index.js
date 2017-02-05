var express = require('express');
var app = express();
var Search = require('./lib/search.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/', function(req, res){

  Search(req.body)
  .then(function(data){
      res.send(data);
    }).catch(function(err){
      console.error(err);
    })
});

app.get('/', function(req, res){
  res.send("Send data using post request");
});


app.listen(8080, function(){
  console.log("Server started on port 8080");
})
