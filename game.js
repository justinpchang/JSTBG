$(document).ready(function() {
  // feed and input setup
  $("#inputBox").bind("enterKey",function(e){
    command = $("#inputBox").val();
    response = respondTo(command);
    text = "[" + time + "] <span class='command'>" + command + "</span></p><p><span style='margin-left:5em'></span>&rdsh;" + response +"</p><p>" + text;
    $("#inputBox").val("");
  });
  $("#inputBox").keyup(function(e){
      if(e.keyCode == 13)
      {
          $(this).trigger("enterKey");
      }
  });
  $("#inputSubmit").click(function() {
    text = "[" + time + "] " + $("#inputBox").val() + "</p><p>" + text;
    $("#inputBox").val("");
  });
  var updateFeed = function() {
    $("#feed").html(text);
  };
  setInterval(updateFeed, 100);
});

function respondTo(command) {
  var returnStr = "";

  // parse command into words
  input = command.split(" ");
  for(i = 0; i < input.length; i++) {
    input[i] = input[i].toLowerCase();
  }

  // check words against dictionary
  for(i = 0; i < input.length; i++) {
    for(j = 0; j < dictionary.length; j++) {
      if(input[i] == dictionary[j]) {
        break;
      }
      else if(j == dictionary.length - 1 && dictionary.length > 1) {
        invalid = true;
        break;
      }
    }
    if(invalid) {
      invalid = false;
      return "I do not understand that.";
      break;
    }
  }

  // test word
  if(input[0] == "hello") {
    return "Hello to you, too.";
  }

  // directional words {go north/south/east/west}
  if(input[0] == "go") {
    switch(input[1]) {
      case "north":
        console.log("GOING NORTH");
        go("north");
        break;
      case "south":
        go("south");
        break;
      case "east":
        go("east");
        break;
      case "west":
        go("west");
        break;
      default:
        return "That is not a valid direction.";
    }
    if(invalid) {
      invalid = false;
      return "There is no region in that direction";
    }
    return "You went " + input[1] + " and are now in region \"" + map[y][x] + "\".";
  }

  return returnStr;
}

function go(dir) {
  switch(dir) {
    case "north":
      if(y - 1 > -1)
        y -= 1;
      else
        invalid = true;
      break;
    case "south":
      if(y + 1 < map.length)
        y += 1;
      else
        invalid = true;
      break;
    case "east":
      if(x + 1 < map[y].length)
        x += 1;
      else
        invalid = true;
      break;
    case "west":
      if(x - 1 > -1)
        x -= 1;
      else
        invalid = true;
      break;
  }
  return;
}
