import { RomanNumber } from './../src/romanNumerals.js';


describe('romanNumerals', function() {

  it('should test whether an input exists', function() {
    var testNumber = new RomanNumber('14');
    expect(testNumber.input).toEqual('14');
 });

  it('should test if input is not a number', function() {
    var notNumber = new RomanNumber("A");
    expect(notNumber.numChecker()).toEqual(false);
  });

  it('should test if input is a number', function() {
    var isNumber = new RomanNumber('14');
    expect(isNumber.numChecker()).toEqual(true);
  });

  it('should return a roman numeral input is a number', function() {
    var isNumber = new RomanNumber('14');
    expect(isNumber.numChecker()).toEqual(true);
  });

});
