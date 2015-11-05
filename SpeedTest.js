function speedTest(func, times, args){
  return function(){
    var startTime = +new Date;
    for(var i=1, t=times; i<t; i++)
      func.apply(this, args);
    var endTime = +new Date;
    return (endTime - startTime)/times;
  };
}

var array = ["hello", "wonderful", "world"];
var a = function(){
  var str = "";
  for(var i=0; i<array.length;i++){
    str+=array[i]+" ";
  }
  return str;
}

var b = function(){
  return array.join(" ");
}

var c = function(){
  var sum = 0;
  for(var i=0; i<array.length;i++){
    sum+=array[i].length;
  }
  return sum;
}

var d = function(){
  var sum = 0;

  array.forEach(function(item){
    sum+=item.length;
  });

  return sum;
}

var test1 = speedTest(c,1000000000);
var test2 = speedTest(d,1000000000);

console.log(test1());
console.log(test2());
