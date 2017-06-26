describe('fizz_buzz_ui - index.html', function() {

  var mFizzBuzz = new FizzBuzz();

  beforeEach(function() {
      jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
      loadFixtures('index.html');
      $.holdReady(false);
      $('#start').trigger('click');
  });

  it("displays Get Ready!", function() {
      expect($('#randomNumber').text()).toBe('Get Ready!');
  });

  it("should display a random number", function(done){
    setTimeout(function(){
      expect($('#randomNumber').text()).not.toBe('Get Ready!');
      expect($('#randomNumber').text()).toBeTruthy();
      done();
    }, 1000
  );
  });

  it("should make choice buttons active after clicking start", function(){
    expect($('#fizz')).not.toHaveAttr('disabled');
    expect($('#buzz')).not.toHaveAttr('disabled');
    expect($('#fizzbuzz')).not.toHaveAttr('disabled');
    expect($('#none')).not.toHaveAttr('disabled');
  });

  it("should check that the correct answer is selected",function(){
    displayResult('fizz','fizz');
    expect($('#rightOwrong').text()).toBe('Correct');
  });
});
