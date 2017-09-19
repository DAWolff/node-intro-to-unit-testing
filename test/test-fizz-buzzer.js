const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should be divisible by 15, 5 or 3', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 45, expected: 'fizz-buzz'},
      {a: 10, expected: 'buzz'},
      {a: 9, expected: 'fizz'},
      {a: 7, expected: 7}
    ];
    //
    // for each input (a), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if arg is not a number', function() {
    // range of bad inputs where not a number
    const badInputs = ['z', undefined, null, '$'];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});
