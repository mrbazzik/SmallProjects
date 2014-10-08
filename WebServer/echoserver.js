var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
  console.log(req.method, req.url);
  var urlParsed = url.parse(req.url, true);
  console.log(urlParsed);

  fs.readFile('./data.json', function(err, info){
    if(err){
      console.error(err);
      res.statusCode = 400;
      res.end('No file');
      return;
    }
    res.write(info);
    if(urlParsed.pathname == '/echo' && urlParsed.query.message){
      res.end(urlParsed.query.message);

    }
    else{
      res.statusCode = 404;
      res.end('Page not found');
    }

  });


}).listen(1337);
