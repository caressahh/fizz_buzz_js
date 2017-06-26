var getRandomInt = function() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
};

var startNewGame = function() {
  $('#randomNumber').html('Get Ready!');
  setTimeout(function(){
    var number = getRandomInt();
    $('#randomNumber').html(number);
  } ,1000);
  $('#fizz').removeAttr('disabled');
  $('#buzz').removeAttr('disabled');
  $('#fizzbuzz').removeAttr('disabled');
  $('#none').removeAttr('disabled');
};

var checkUserAnswer = function(userResponse) {
  var randomNumber = $('#randomNumber').text();
  var result = fizzBuzz.getValue(randomNumber);
displayResult(userResponse,result);
};

var displayResult = function(userResponse, result){
  if(userResponse === result){
    $('#rightOwrong').html('Correct');
  }
  else {
    $('#rightOwrong').html('InCorrect');
  }

};

var onReadyEvents = function () {

  var fizzBuzz = new FizzBuzz();

  $('#start').click(function() {
    startNewGame();
  });
  $('#fizz').click(function() {
    checkUserAnswer('fizz');
  });
  $('#buzz').click(function() {
    checkUserAnswer('buzz');
  });
  $('#fizzbuzz').click(function() {
    checkUserAnswer('fizzbuzz');
  });
  $('#none').click(function() {
    checkUserAnswer('none');
  });


};
