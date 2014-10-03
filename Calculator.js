function Calculator() {
  this.opers = {
    '+': function(a,b){return a+b;},
    '-': function(a,b){return a-b;}
  };
  this.calculate = function(str){
  var arr = str.split(" ");
  if(arr.length!=3 || +arr[0]===NaN || +arr[2]===NaN || !(arr[1] in this.opers))  return "Invalid input";
  return this.opers[arr[1]](+arr[0], +arr[2]);
  };

  this.addMethod = function(name, func){
        this.opers[name] = func;
  };
}


var calc = new Calculator;
calc.addMethod('*', function(a,b){return a*b;});
console.log(calc.calculate('3 * 7'));
