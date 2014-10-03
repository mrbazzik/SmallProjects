function f(){
  console.log(arguments[0]);
  var arr = [].slice.call(arguments, 1);
  g.apply(this, arr);
}

function g(a, b, c){
  console.log(a+b+(c||0));
}

f("тест", 1, 2); // f выведет "тест", дальше g посчитает сумму "3"
f("тест2", 1, 2, 3); // f выведет "тест2", дальше g посчитает сумму "6"
