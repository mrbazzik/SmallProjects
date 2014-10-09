var MongoClient = require('mongodb').MongoClient
  , assert = require('assert')
  , format = require('util').format;

// Connection URL
var url = 'mongodb://localhost:27017/chat';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  var collection = db.collection('test_insert');
  collection.insert({a:2}, function(err, docs){
    collection.count(function(err, count){
        console.log(format('count=%s', count));
    });

    collection.find().toArray(function(err, results){
      console.dir(results);
      db.close();
    });
  });


});
