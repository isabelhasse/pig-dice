function Player(totalScore, runningScore, roll) {
  this.totalScore = totalScore;
  this.runningScore = runningScore;
  this.roll = roll;
}

var whoseTurn = 1;

var player1 = new Player(0, 0, 0);
var player2 = new Player(0, 0, 0);

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

$(document).ready(function(){
  $("#roll-dice").click(function() {
    if(whoseTurn === 1) {
      player1.processRoll();
      player1.displayResults();
    } else {
      player2.processRoll();
      player2.displayResults();
    }

    if (whoseTurn === 1) {
      $("#whose-turn").html("<h3>Player 1</h3>");
    } else {
      $("#whose-turn").html("<h3>Player 2</h3>")
    }
  });
});
