$(document).ready(function () {
  var player1Move = 0
  var player2Move = 0
  var trackLength = 0

  // this section sets the length of the track from user input
/*  function setTrackLength () {
    // get user input & if less than 10, set to 10
    trackLength = prompt("Please type a number between 10 & 40 to choose your track length..")
    if (trackLength < 10) {
      trackLength = 10
    }; // close if

    // set trackLength = user input (append td's)
    for (i = 1; i <= trackLength; i++) {
      $("#player1_strip").append("<td class='p1_strip'>")
      $("#player2_strip").append("<td>")
    }; // close 'for loop'
  }; // close setTrackLength
  setTrackLength()*/

/*  alert("Player 1 use 'Q' to move, Player 2 use 'P'.");*/
  
  function gameStart () {
    // removes active class from all td's
    $("td").removeClass("active")
    // sets first td of both rows to active
    $("#p1_strip > td:first, #p2_strip td:first").addClass("active")

    // event listener for keypress
    $(document).on('keyup', function (event) {
      if (event.keyCode === 81) {
        if (player1Move < trackLength) {
          updatePlayer('player1_strip')
          player1Move++
        }
        else {
          win("Player 1")
        }
      }; // close 'if 81 loop'

      if (event.keyCode === 80) {
        if (player2Move < trackLength) {
          updatePlayer('player2_strip')
          player2Move++
        }
        else {
          win('Player 2')
        }
      }; // close 'if 80 loop'
     // console.log(player1Move, player2Move)
    }) // close listener
  } // close 'gameStart function'
  gameStart() // call 'gameStart' function

  updatePlayer = function (player) {
    var activeCell = $('#' + player + ' .active')
    var moveCell = activeCell.next()

    activeCell.removeClass('active')
    moveCell.addClass('active')
  } // close 'updatePlayer function'

  // alerts player they have won and calls gameOver function
 /* var win = function (winner) {
    alert(winner + ' wins!, Congratulations!')
    gameOver()
  }

  // reloads game
  var gameOver = function () {
    window.location.reload(true)
  } // close 'gameOver function'*/
}) // close 'document ready function'
