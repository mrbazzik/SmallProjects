var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat');

var schema = mongoose.Schema({
  name: String
});

schema.methods.meow = function(){
  console.log(this.get('name'));
};

var Cat = mongoose.model('Cat', schema);

var kitty = new Cat({
  name: 'Zildjian'
  });
kitty.save(function (err, kitty, affected) {
  if (err) throw err;
  console.log(arguments);
});
