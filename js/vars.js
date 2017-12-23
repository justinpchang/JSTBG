var i,j;
var invalid = false;

var inputBoxWidth = 100;
var text = "";
var time = "";

var command = "";
var response = "";
var input = [];

var dictionary = [];
// testing value
dictionary.push("hello");
// directions
dictionary.push("go");
dictionary.push("north");
dictionary.push("south");
dictionary.push("east");
dictionary.push("west");

var x = 1;
var y = 1;
var map = [
  ["TL", "TM", "TR"],
  ["ML", "MM", "MR"],
  ["BL", "BM", "BR"]
];
