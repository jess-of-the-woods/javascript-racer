$(document).ready(function() {
  var player1Move = 0;
  var player2Move = 0;
  var trackLength = 0;

function trackLengthSet() {
  trackLength = prompt("Please type a number between 10 & 40 to choose your track length..");
  if (trackLength < 10) {
    trackLength = 10
  };

  for (i = 1; i <= trackLength; i++){
    $("#player1_strip").append("<td>");
    $("#player2_strip").append("<td>");
  };

 // console.log(trackLength);
};
trackLengthSet();


alert("Player 1 use 'q' to move, Player 2 use 'p'.");





});
