var arr = ["123", "str", "12px"];
function getSortNumbers(arr){
  var newArr = [];
  for(var i=0; i< arr.length; i++) {
    if(!isNaN(parseFloat(arr[i]))) newArr.push(arr[i]);
  }

  newArr.sort(function(a,b){
    if(parseFloat(a) > parseFloat(b))
      return 1;
    else return -1;
  });
  return newArr;
}

console.log(getSortNumbers(arr));
