var User = require('./models/user').User;
var user = new User({
  username:'Tester3',
  password: 'secret'
});

user.save(function(err, user, affected){
  console.log(arguments);

  User.findOne({username:'Tester'}, function(err, tester){
    console.log(tester);
  });
})
