var express = require('express');
var app = express();
var port = 3000;
var middleware =  require('./middleware.js');
app.use(middleware.logger);
// app.get('/',function(req,res){
//   res.send('<h1>hello express</h1>');
// });
app.get('/about',middleware.requireAuthenication,function(req,res){
  res.send('<h1>about us</h1>');
});
app.use(express.static(__dirname + '/public'));
app.listen(port , function() {
console.log('Express server Started '+ port);
});
