var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };


function printList(list) {
  var currentElement = list;
  while(currentElement){
    console.log(currentElement.value);
    currentElement = currentElement.next;
  }
}

var fPrint = function printReverseList(list){
  if(list.next) printReverseList(list.next);
  console.log(list.value);
}

function printReverseList2(list){
  var arr = [];
  var currentElement = list;
  while(currentElement){
    arr.push(currentElement.value);
    currentElement = currentElement.next;
  }
  arr.reverse();
  return arr.join('\n');
}

//printList(list);
var date1 = new Date();
fPrint(list);
console.log(new Date() - date1);

var date1 = new Date();
console.log(printReverseList2(list));
console.log(new Date() - date1);
