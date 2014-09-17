
var obj = {
  className: 'open menu my def menu'
}

var a=1;
function removeClass(obj, className){
    var arr = obj.className.split(' ');
    for(var i=0; i<arr.length; i++){
      if(arr[i] == className) {
        arr.splice(i--, 1);
      }
    }
    obj.className = arr.join(' ');
}


removeClass(obj, 'menu');
console.log(obj.className);
