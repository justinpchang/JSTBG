// create new commands dictionary
var commands = new Object();

commands['hello'] = function(args) {
  return 'Hello there!';
}

commands['?'] = function(args) {
  return Object.keys(this).join(' | ');
};

commands['go'] = function(args) {
  // return possible locations if args empty
  if(args.join() == '') {
    return player.getLoc().getAdjacent().join(' | ');
  }

  var newLoc = new Location(args.join(' '));

  if(player.getLoc().isAdjacent(newLoc)) {
    player.setLoc(newLoc);
    return 'Travelling to ' + newLoc.getName() + '...';
  } else {
    return args[0] + ' is not reachable from your current location.';
  }
};

commands['list'] = function(args) {
  return player.getLoc().getAdjacent().join(',');
};
