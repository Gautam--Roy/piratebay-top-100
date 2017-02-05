var cheerio = require('cheerio');


var resolve = function(body){
    var $ = cheerio.load(body);
    var movieName = [];
    $('.detLink').each(function(){
      movieName.push($(this).text())
    });
    return new Promise(function(resolve, reject){
      resolve(movieName);
    })
}


module.exports = {
  resolve : resolve
}
