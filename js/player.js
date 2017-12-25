function Player(loc, hp, items) {
  this.loc = loc;
  this.hp = hp;
  this.items = items;
}

Player.prototype.getLoc = function() {
  return this.loc;
}

Player.prototype.setLoc = function(loc) {
  this.loc = loc;
}

Player.prototype.getHP = function() {
  return this.hp;
}

Player.prototype.setHP = function() {
  this.hp = hp;
}

Player.prototype.getItems = function() {
  return this.items;
}

Player.prototype.setItems = function(items) {
  this.items = items;
}
