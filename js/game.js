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
    $("#stats").html('HP: ' + player.getHP() + ' | Location: ' + player.getLoc().getName());
  };

  setInterval(updateFeed, 100);
});

function respondTo(command) {
  // parse command into words
  input = command.split(" ");
  for(i = 0; i < input.length; i++) {
    input[i] = input[i].toLowerCase();
  }

  // check to make sure word exists
  if(commands.hasOwnProperty(input[0])) {
    return commands[input[0]](input.slice(1));
  }
  return "I do not understand that.";
}
