var express = require('express');
var app = express();
var Search = require('./lib/search.js');
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res, next) {
   res.header('Access-Control-Allow-Origin', "*");
   res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
})

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


app.listen(app.get('port'), function(){
  console.log("Server started on port : ", app.get('port'));
})
