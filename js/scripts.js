function Player(score) {
  this.score = score;
}

var whoseTurn = 1;

var player1 = new Player(0);
var player2 = new Player(0);

var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
}

Player.prototype.processRoll = function() {
  var roll = rollDice()
  if (roll === 1) {
    nextPlayer();
  }
  $("#roll-result").text(roll);
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
    } else {
      player2.processRoll();
    }
    //$("#roll-result").text(rollDice());
    if (whoseTurn === 1) {
      $("#whose-turn").html("<h3>Player 1</h3>");
    } else {
      $("#whose-turn").html("<h3>Player 2</h3>")
    }
  });
});
