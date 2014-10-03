function f(x){
  console.log(x);
}

function delay(func, ms){
  return function(){
    var args = arguments;
    var self = this;
    setTimeout(function(){func.apply(self,args);}, ms);
  };
}

var f3000 = delay(f, 3000);

f3000('hehei!');
