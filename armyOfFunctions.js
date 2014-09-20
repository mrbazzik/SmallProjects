function makeArmy() {

  var shooters = [];

  for(var i=0; i<10; i++) {
    var shooter = function(i){
      return function() {
      console.log(i);
    };
  }(i);
    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
