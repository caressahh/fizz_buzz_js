function FizzBuzz() {}

FizzBuzz.prototype.getValue = function(num) {
  if (num % 15 === 0){
    return 'fizzbuzz';
  }
  else if (num % 5 === 0){
    return 'buzz';
  }
  else if (num % 3 === 0){
    return 'fizz';
  }
    return num;
  };
  FizzBuzz.prototype.getGameValue = function(num) {
    if (num % 15 === 0){
      return 'fizzbuzz';
    }
    else if (num % 5 === 0){
      return 'buzz';
    }
    else if (num % 3 === 0){
      return 'fizz';
    }
      return 'none';
    };
