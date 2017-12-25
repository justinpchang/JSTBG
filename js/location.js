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

Location.prototype.isAdjacent = function(name) {
  return this.adjacent.indexOf(name);
}

Location.prototype.equals = function(loc) {
  return this.name == loc.name && arraysEqual(this.adjacent, loc.adjacent);
}
