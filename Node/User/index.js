var db = require('db');
var log = require('logger')(module);

function User(name){
  this.name = name;
}

User.prototype.hello = function(who){
  log(db.getPhrase('Hello')+', '+who.name);

}

console.log("User is required!");

//exports.User = User;
 module.exports = User;
