var fs= require ('fs');

var stream = new fs.ReadStream('server.js', {encoding: 'utf-8'});
stream.on('open',function(){
  console.log('open');
});
console.log('test');

stream.on('readable', function(){
  console.log('redable');
  console.log(stream.read());
});
console.log('test1');


stream.on('end', function(){
  console.log('end');
});

console.log('test2');
