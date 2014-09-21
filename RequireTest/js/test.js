define(['./filter','./inBetween', './inArray'], function(filter, inBetween, inArray){
		return function(){
			 var arr = [1, 2, 3, 4, 5, 6, 7];

				console.log( filter(arr, function(a) { return a % 2 == 0; }) ); // 2,4,6

				console.log( filter(arr, inBetween(3,5)) ); // 3,4,5,6

				console.log( filter(arr, inArray([1,2,10])) ); // 1,2
			};
	});
