function Menu(state) {
  this._state = state || this.STATE_CLOSED;
};

Menu.prototype.STATE_OPEN = 1;
Menu.prototype.STATE_CLOSED = 0;

Menu.prototype.open = function() {
  this._state = this.STATE_OPEN;
};

Menu.prototype.close = function() {
  this._state = this.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
  switch(this._state) {
    case this.STATE_OPEN:
      return 'открыто';

    case this.STATE_CLOSED:
      return 'закрыто';
  }
};

Menu.prototype.showState = function() {
  console.log( this._stateAsString() );
};


function AnimatingMenu(){
  Menu.apply(this, arguments);
}

AnimatingMenu.prototype.STATE_ANIMATING = 2;

AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.prototype.open = function() {
  this._state = this.STATE_ANIMATING;
  var self = this;
  this._timer = setTimeout(function(){Menu.prototype.open.call(self)},1000);

};

AnimatingMenu.prototype.close = function() {
  clearTimeout(this._timer);
  Menu.prototype.close.call(this);
};

AnimatingMenu.prototype._stateAsString = function() {
  if(this._state == this.STATE_ANIMATING) return 'анимация';
  else return Menu.prototype._stateAsString.call(this);
};

  var menu = new AnimatingMenu();

  menu.showState(); // закрыто

  menu.open();
  menu.showState(); // анимация

  setTimeout(function() {
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто (закрытие без анимации)
  }, 1000);
