describe("app", function() {
  var app;

  it("gives a random number between 1-100", function() {
    var randomNumber = getRantomInt();
    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(101);
  });


});
