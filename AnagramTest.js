function Anagrams(a, b){
  var aLow = a.toLowerCase();
  var bArr = b.toLowerCase().split('');
  if(aLow == bArr.reverse().join('')) return true;
  else return false;

}

console.log(Anagrams("gth", "htdG"));
