var fs = require('fs');

function Location(name) {
  this.name = name;
  // get adjacent locations from name.txt file
  var contents = fs.readFileSync('maps/sample1.txt', 'utf8').split('\n');
  // find correct location line
  for(var i = 0; i < contents.length; i++) {
    var line = contents[i].split(':');
    if(line[0] == name) {
      this.adjacent = line[1].split(',');
    }
  }
}

Location.prototype.getName = function() {
  return this.name;
}

Location.prototype.getAdjacent = function() {
  return this.adjacent;
}

Location.prototype.isAdjacent = function(loc) {
  for(var i = 0; i < this.adjacent.length; i++) {
    if(this.adjacent[i] == loc.getName()) {
      return true;
    }
  }
  return false;
}
