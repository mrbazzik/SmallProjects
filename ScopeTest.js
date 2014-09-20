var Mod = (function(){
  function c(){
    b();
  }

  function a(){
    c();
  }

  function b(){
    console.log(1);
  }

  return {
    a: a,
    b: b
  };
})();

"use strict";
Mod.b = function(){
  console.log(2);
};
Mod.a();
Mod.b();

console.log(typeof null);

if(null) console.log(1);
function Ob(){
  this.a = undefined;
}
var obj = new Ob();
console.log("b" in obj);
