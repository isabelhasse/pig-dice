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

$(document).ready(function(){
  $("#roll-dice").click(function() {
    if(whoseTurn === 1) {
      player1.processRoll();
      $("#roll-result").text(player1.roll);
    } else {
      player2.processRoll();
      $("#roll-result").text(player2.roll);
    }

    if (whoseTurn === 1) {
      $("#whose-turn").html("<h3>Player 1</h3>");
    } else {
      $("#whose-turn").html("<h3>Player 2</h3>")
    }
  });
});
