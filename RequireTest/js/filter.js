define(function(){
	return function filter(arr, func){
   var retArr=[];
    for (var i=0; i<arr.length; i++)
       if (func(arr[i]))  retArr.push(arr[i]);
   return retArr;
};
}
);