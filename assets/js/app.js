
$(document).ready(function () {
  $('#start').click(function() {
    startNewGame();
  });


});
var getRandomInt = function() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
};
var startNewGame = function() {
  $('#randomNumber').html('Get Ready!');
  setTimeout(function(){
    var number = getRandomInt();
    $('#randomNumber').html(number);
  } ,1000);


};
