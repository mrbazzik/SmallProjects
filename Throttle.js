function throttle(func, ms){
  var lastCall = 0;
  var lastTimer = 0;
  return function(){
    var self = this;
    var args = arguments;
    clearTimeout(lastTimer);
    if(new Date - lastCall >= ms) {
      lastCall = new Date;
      func.apply(self, args);
    }
    else lastTimer = setTimeout(function(){func.apply(self, args); lastCall = new Date;}, ms - (new Date - lastCall));

  };
}




// Тесты: две функции test1 и test2.
// у каждой написано, что должна выводить
// и сверху нарисовано как работают вызовы

// тест должен выводить 1, 13

// время        ------0-----1000-----
// вызовы       ------123------------
// срабатывания ------!-------!------
// значение i   ------1------1+3-----
function test1() {
  var log = 'test1: ';
  // тестовая функция -- прибавляет аргумент к счётчику i
  var f = function(a) { log += a; }

  // затормозить функцию до одного раза в 1000 мс
  var f1000 = throttle(f, 1000);

  f1000(1); // такой вызов должен сработать тут же
  f1000(2); // (тормозим, не прошло 1000мс)
  f1000(3); // (тормозим, не прошло 1000мс)
  // через 1000 мс запланирован вызов с последним аргументом

  console.log(log); // log==1 (пока что сработал только первый вызов)

  setTimeout(function() { console.log(log) }, 1100);  // log==13 через 1100мс, т.к. сработал вызов f1000(3)
}

// тест должен выводить 12, 125

// время        ------0-----1000------1500--1600--1700-----2000---
// вызовы       ------12---------------3-----4-----5--------------
// срабатывания ------!-------!-----------------------------!-----
// значение i   ------1------12----------------------------125----
function test2() {
  var log = 'test2: ';
  var f = function(a) { log += a; }

  var f1000 = throttle(f, 1000);

  f1000(1); // сработает тут же
  f1000(2); // (тормозим, пока не прошло 1000мс)

  // по истечении 1000 мс будет вызов с 2

  setTimeout(function() { console.log(log) }, 1100);  // ..так что через 1100 мс будет log=12

  setTimeout(function() { f1000(3) }, 1500); // тормозим, следующий вызов в 2000 мс
  setTimeout(function() { f1000(4) }, 1600); // ...
  setTimeout(function() { f1000(5) }, 1700); // ...

  // по истечении 2000 мс будет вызов с аргументом 5

  setTimeout(function() { console.log(log) }, 4000);  // log=125 в итоге
}



test1();
// раскомментируейте для запуска
 test2();
