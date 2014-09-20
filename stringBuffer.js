function makeBuffer(){
   var buffer = '';

   function bufferReal(a){
      if(a === undefined) return buffer;
      else buffer+=a;
}
  bufferReal.clear = function(){
    buffer = '';
  };
  return bufferReal;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!

buffer.clear();
buffer(0); buffer(1); buffer(0);

console.log( buffer() ); // '010'
