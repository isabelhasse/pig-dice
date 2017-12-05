function Player(totalScore, runningScore, roll) {
  this.totalScore = totalScore;
  this.runningScore = runningScore;
  this.roll = roll;
}

var whoseTurn = 1;


var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
}

Player.prototype.processRoll = function() {
  this.roll = rollDice()
  if (this.roll === 1) {
    nextPlayer();
    this.runningScore = 0;
  } else {
    this.runningScore += this.roll;
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.runningScore;
  this.runningScore = 0;
  nextPlayer();
}

var nextPlayer = function() {
  if (whoseTurn === 1) {
    whoseTurn = 2;
  } else {
    whoseTurn = 1;
  }
};

Player.prototype.displayResults = function() {
  $("#roll-result").text(this.roll);
  $("#running-score").text(this.runningScore);
}

var displayTurn = function() {
  if (whoseTurn === 1) {
    $("#whose-turn").text("Player One");
  } else {
    $("#whose-turn").text("Player Two")
  }
};

$(document).ready(function(){
  var player1 = new Player(0, 0, 0);
  var player2 = new Player(0, 0, 0);

  $("#roll-dice").click(function() {
    if(whoseTurn === 1) {
      player1.processRoll();
      player1.displayResults();
    } else {
      player2.processRoll();
      player2.displayResults();
    }
    displayTurn();
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
