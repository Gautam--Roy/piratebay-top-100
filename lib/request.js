var Promise = require('bluebird');
var request = Promise.promisify(require('request').get);
var categoryMap = require('./categoryMap');

module.exports = function(category){

    searchCat = categoryMap[category];

  return request('https://pirateproxy.vip/top/' + searchCat);
}
