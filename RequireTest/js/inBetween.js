define(function(){
	return function inBetween(a,b){
   return function(c){
    return (c >= a && c<= b);
};
};
}
);