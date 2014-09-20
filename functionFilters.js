function filter(arr, func){
   var retArr=[];
    for (var i=0; i<arr.length; i++)
       if (func(arr[i]))  retArr.push(arr[i]);
   return retArr;
}

function inBetween(a,b){
   return function(c){
    return (c >= a && c<= b);
}
}

function inArray(arr){
   return function(a){
      if(arr.indexOf(a)+1) return true;
      else return false;
}

}

/* .. ваш код для filter, inBetween, inArray */
var arr = [1, 2, 3, 4, 5, 6, 7];

console.log( filter(arr, function(a) { return a % 2 == 0 }) ); // 2,4,6

console.log( filter(arr, inBetween(3,6)) ); // 3,4,5,6

console.log( filter(arr, inArray([1,2,10])) ); // 1,2
