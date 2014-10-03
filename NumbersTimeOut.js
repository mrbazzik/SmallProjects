 var dat = new Date;

 var i = 1;

// var timer = setInterval(function(){
//   if(i<=20) console.log(i++);
//   else {
//     console.log(new Date - dat);
//     clearInterval(timer);
//
//   }
// }, 100);

// var timer = setTimeout(function num(){
//   if(i<=20) {
//     console.log(i++);
//     setTimeout(num, 100);
//   }
//   else console.log(new Date - dat);
//
//
// },100);

function getCounter(num){
  var count = 1;
  var indTimer;
  var dat = new Date;
  return function timer(){
    if(count<=num) {
      console.log(count++);
      indTimer = setTimeout(timer, 100);
    }
    else {
      clearTimeout(indTimer);
      console.log(new Date - dat);
    }

  };
}

var timer = getCounter(24);
timer();
