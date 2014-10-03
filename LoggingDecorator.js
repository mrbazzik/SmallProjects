function work(a){
  return a*a;
}

function makeLogging(f){
  var log = [];
  var func = function(){
    for(var i=0; i<arguments.length; i++) log.push(arguments[i]);
    return f.apply(this, arguments);
  };
  func.getLog = function(){
    return log;
  };
  return func;
}

work = makeLogging(work);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

console.log(work.getLog());
