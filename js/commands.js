// create new commands dictionary
var commands = new Object();

commands['hello'] = function(args) {
  return 'Hello there!';
}

commands['test'] = function(args) {
  return player.getLoc().getAdjacent()[0];
};

commands['?'] = function(args) {
  return Object.keys(this).join(' ');
};
