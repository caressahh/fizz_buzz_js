describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("returns 1 if number is 1", function() {
    expect(fizzBuzz.getValue(1)).toEqual(1);
  });

  it("returns 'fizz' if number is divisible by 3", function() {
    expect(fizzBuzz.getValue(3)).toEqual('fizz');
  });

  it("returns 'buzz' if number is divisible by 5", function() {
    expect(fizzBuzz.getValue(5)).toEqual('buzz');
  });
});
