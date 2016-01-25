$(document).ready(function() {
  var player1Move = 0;
  var player2Move = 0;
  var trackLength = 0;

//this section sets the length of the track from user input
function setTrackLength() {
  trackLength = prompt("Please type a number between 10 & 40 to choose your track length..");
  if (trackLength < 10) {
    trackLength = 10
  };

  for (i = 1; i <= trackLength; i++){
    $("#player1_strip").append("<td>");
    $("#player2_strip").append("<td>");
  };

}; //close setTrackLength

setTrackLength();


alert("Player 1 use 'Q' to move, Player 2 use 'P'.");


function gameStart() {

  $("td").removeClass("active"); //removes active class from all td's
  $("#player1_strip > td:first, #player2_strip td:first").addClass("active"); //sets first td of both rows to active

  
  $(document).on('keyup',function(event) { //event listener - keypress
  
    if (event.keyCode === 81) {
      if (player1Move < trackLength) {
        updatePlayer('player1_strip');
        player1Move++;
      }
      else {
        win("Player 1");
      }
    }; //close 'if 81 loop'

    if (event.keyCode === 80) {
      if (player2Move < trackLength) {
        updatePlayer('player2_strip');
        player2Move++;
      }
      else {
        win("Player 2");
      }
    }; //close 'if 80 loop'
    console.log(player1Move, player2Move);

  }); //close listener


}; //close 'gameStart function'


gameStart();

  updatePlayer = function(player) {
    var activeCell = $("#" + player + " td.active");
    var moveCell = activeCell.next();

    activeCell.removeClass("active");
    moveCell.addClass("active");
  }; //close 'updatePlayer function'

  win = function(winner) {
    alert(winner + " wins!, Congratulations!");
    gameOver();
  }; //close 'win function'

  function gameOver() {
        window.location.reload(true);
  }; //close 'game over function'

}); //close 'document ready function'

