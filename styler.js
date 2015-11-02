$(document).ready(function() {
  document.getElementById("inputBox").style.width = $(window).width() - (30 + inputBoxWidth) + "px";
  document.getElementById("inputSubmit").style.width = inputBoxWidth + "px";

  // resize the input if window is resized
  $(window).resize(function() {
    document.getElementById("inputBox").style.width = $(window).width() - (30 + inputBoxWidth) + "px";
    document.getElementById("inputSubmit").style.width = inputBoxWidth + "px";
  });
});
