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
  var invalid = false;

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
      return "I do not understand that.";
      break;
    }
  }

  return returnStr;
}
