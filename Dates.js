now = new Date(2012, 1, 20, 3, 12);



function whatDay100DaysAgo(date){
  var dateNew = date;
  var daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  dateNew.setDate(dateNew.getDate() - 100);
  console.log("Date: "+dateNew.getDate());
  console.log("Month: "+dateNew.getMonth());
  console.log("Day: "+daysOfWeek[dateNew.getDay()]);
}

//whatDay100DaysAgo(new Date);


/**
 * lastDayOfMonth - calculates last day of current month
 *
 * @return {string}  representation of day
 */
function lastDayOfMonth(){
  var daysOfWeek = ['sn', 'mn', 'td', 'wd', 'th', 'fr', 'st'];
  var now = new Date;
  now.setMonth(now.getMonth()+1);
  now.setDate(0);
  console.log(daysOfWeek[now.getDay()]);
}

//lastDayOfMonth();


function secondsTillTomorrow(){
  var tomorrow = new Date;
  tomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate()+1);

  console.log(Math.round((tomorrow - new Date)/1000));
}

function startCount(){
  secondsTillTomorrow();
  setTimeout(startCount, 1000);
}

startCount();
