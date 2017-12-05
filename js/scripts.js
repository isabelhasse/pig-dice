var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
}

$(document).ready(function(){
  $("#roll-dice").click(function() {
    $("#result").text(rollDice());

  });
});
