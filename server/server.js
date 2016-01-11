
var app = require('./server-config.js');

var port = process.env.PORT || 5000;


var server = app.listen(port, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('One2One server listening here on: ', host, port);
});

module.exports = app;