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

};
trackLengthSet();


alert("Player 1 use 'Q' to move, Player 2 use 'P'.");

function gameStart() {

  $("td").removeClass("active"); //removes active class from all td's
  $("#player1_strip > td:first, #player2_strip td:first").addClass("active"); //sets first td of both rows to active

  //event listener for keypress
  $(document).on('keyup',function(event) {
    if (event.which == 81) {
      player1Move++;
    }
    else  if (event.which == 80) {
      player2Move++;
    }
    console.log(player1Move, player2Move);

  }) //close listener

} //close gameStart


gameStart();

});
