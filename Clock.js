function Clock(options) {

  this._template = options.template;
  this._timer;

}

Clock.prototype.stop = function() {
  clearInterval(this._timer);
};

Clock.prototype.start = function() {
  //var self = this;
  var bindRender = this._render.bind(this);
  bindRender();
  this._timer = setInterval(bindRender, 1000);
};

Clock.prototype._render = function(){
  var date = new Date();

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

  console.log(output);
};


function ExtClock(options){
    Clock.apply(this, arguments);
    this._precision = options.precision || 1000;
}

ExtClock.prototype = Object.create(Clock.prototype);
ExtClock.prototype.start = function() {
  var bindRender = this._render.bind(this);
  bindRender();
  this._timer = setInterval(bindRender, this._precision);
};

var clock = new ExtClock({
        template: 'h:m:s',
        precision: 2000
    });
    clock.start();
