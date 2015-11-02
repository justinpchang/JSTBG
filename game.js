$(document).ready(function() {
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
    text = "[" + time + "] " + $("#inputBox").val() + "</p></p>" + text;
    $("#inputBox").val("");
  });

  var updateFeed = function() {
    $("#feed").html(text);
  };

  setInterval(updateFeed, 100);
});

function respondTo(command) {
  // echo back for now
  return "You typed: " + command;
}
