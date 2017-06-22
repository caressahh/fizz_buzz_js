function FizzBuzz() {}

FizzBuzz.prototype.getValue = function(num) {
  if (num % 3 === 0){
    return 'fizz';
  }
  return num;
  };
