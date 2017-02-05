var cheerio = require('cheerio');


var resolve = function(body){
    var $ = cheerio.load(body);
    var movieName = [];
    $('.detName').each(function(){
      // movieName.push($(this).text())
      movieName.push({ name : $(this).children('a').text(), magnetUrl : $(this).siblings('a').attr('href') })
    });
    return new Promise(function(resolve, reject){
      resolve(movieName);
    })
}


module.exports = {
  resolve : resolve
}
