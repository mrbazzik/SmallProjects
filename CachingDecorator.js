function f(arg) {
  return Math.random()*arg; // может быть любой функцией
}

function makeCaching(f) {
  var cache = {};
  function wrapper(arg){
    if(cache[arg]) return cache[arg];
    else {
      var rez = f.call(this, arg);
      cache[arg] = rez;
      return rez;
    }

  }
  return wrapper;
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b ); // false, другой аргумент => другое значение
c = f(1);
console.log( a == c );
