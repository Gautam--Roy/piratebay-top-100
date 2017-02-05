var makeRequest = require('./request');
var bodyResolver = require('./bodyResolver');
module.exports = function(data){
    return makeRequest(data.category)
    .then(function(data){
        return bodyResolver.resolve(data.body);
    })
}
