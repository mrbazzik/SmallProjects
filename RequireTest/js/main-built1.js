define('filter',[],function(){
	return function filter(arr, func){
   var retArr=[];
    for (var i=0; i<arr.length; i++)
       if (func(arr[i]))  retArr.push(arr[i]);
   return retArr;
};
}
);
define('inBetween',[],function(){
	return function inBetween(a,b){
   return function(c){
    return (c >= a && c<= b);
};
};
}
);
define('inArray',[],function(){
	
		return function inArray(arr){
   return function(a){
      if(arr.indexOf(a)+1) return true;
      else return false;
};
};
}

);
define('test',['./filter','./inBetween', './inArray'], function(filter, inBetween, inArray){
		return function(){
			 var arr = [1, 2, 3, 4, 5, 6, 7];

				console.log( filter(arr, function(a) { return a % 2 == 0; }) ); // 2,4,6

				console.log( filter(arr, inBetween(3,5)) ); // 3,4,5,6

				console.log( filter(arr, inArray([1,2,10])) ); // 1,2
			};
	});

/*	requirejs.config({
		baseUrl: '',
			paths: {
					jquery: ''
				}
		});*/
		
			require(['./test'],function(test){
				test();
			});
define("main", function(){});

