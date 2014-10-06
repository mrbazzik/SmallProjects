// Function.prototype.defer = function(ms){
//   setTimeout(this, ms);
// };
Function.prototype.defer = function(ms){
  var self = this;
  return function(){
    var args = arguments;
    var context = this;
    setTimeout(function(){self.apply(context, args)}, ms);
  }

};

function f(x,y){
  console.log([x,y].join('!!!'));
}

f.defer(2000)(3,45);
100['toString']['length'];
