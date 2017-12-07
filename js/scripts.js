// BUSINESS LOGIC ----------------------------------------------------

function Player(totalScore, runningScore) {
  this.totalScore = totalScore;
  this.runningScore = runningScore;
}

var whoseTurn = 1;
var roll = 0;

var player1 = new Player(0, 0, 0);
var player2 = new Player(0, 0, 0);

var resetValues = function() {
  player1.totalScore = 0;
  player2.totalScore = 0;
}

var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
}

var nextPlayer = function() {
  if (whoseTurn === 1) {
    whoseTurn = 2;
  } else {
    whoseTurn = 1;
  }
};

Player.prototype.processRoll = function() {
  roll = rollDice()
  if (roll === 1) {
    nextPlayer();
    this.runningScore = 0;
  } else {
    this.runningScore += roll;
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.runningScore;
  if (this.totalScore >= 100) {
    alert("You are the winner!!!!");
    resetValues();
  }
  this.runningScore = 0;
  nextPlayer();
}
// USER LOGIC ----------------------------------------------------------

$(document).ready(function(){
  $("#total1").text(player1.totalScore);
  $("#total2").text(player2.totalScore);

  var displayTurn = function() {
    $("#player1").slideToggle();
    $("#player2").slideToggle();
  };

  $("#roll-dice").click(function() {
    debugger;
    if(whoseTurn === 1) {
      player1.processRoll();
      $("#running-score").text(player1.runningScore);
    } else {
      player2.processRoll();
      $("#running-score").text(player2.runningScore);
    }
    if(roll === 1) {
      displayTurn();
    }
    $("#roll-result").text(roll);
  });

  $("#hold").click(function() {
    if(whoseTurn === 1) {
      player1.hold();
    } else {
      player2.hold();
    }
    $("#total1").text(player1.totalScore);
    $("#total2").text(player2.totalScore);
    displayTurn();
  });
});
