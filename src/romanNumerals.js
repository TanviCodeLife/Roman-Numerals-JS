export function RomanNumber(num) {
  this.input = num;
}

RomanNumber.prototype.numChecker = function() {
  if (this.input.match(/[^0-9]/g)) {
    console.log('fail');
    return false;
  } else return true;
}

RomanNumber.prototype.countToNumerals = function(){

    var numbersBase = [1, 5, 10, 50, 100, 500, 1000];
    var lettersBase = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var exceptionNumbers = [4, 9, 40, 90, 400, 900];
    var exceptionLetters = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];


    var splitNumbers = (this.input).toString().split("").map(Number);


    var userNumberTimes = [];


    if (splitNumbers.length == 4) {
        userNumberTimes.push(splitNumbers[0] * 1000);
        userNumberTimes.push(splitNumbers[1] * 100);
        userNumberTimes.push(splitNumbers[2] * 10);
        userNumberTimes.push(splitNumbers[3] * 1);
    } else if (splitNumbers.length == 3) {
        userNumberTimes.push(splitNumbers[0] * 100);
        userNumberTimes.push(splitNumbers[1] * 10);
        userNumberTimes.push(splitNumbers[2] * 1);
    } else if (splitNumbers.length == 2) {
        userNumberTimes.push(splitNumbers[0] * 10);
        userNumberTimes.push(splitNumbers[1] * 1);
    } else {
        userNumberTimes.push(splitNumbers[0] * 1);
    }


    var countToNumerals = [];

    for (var i = 0; i < userNumberTimes.length; i++) {

        if (numbersBase.indexOf(userNumberTimes[i]) != -1) {
            countToNumerals.push(lettersBase[numbersBase.indexOf(userNumberTimes[i])]);
        } else if (exceptionNumbers.indexOf(userNumberTimes[i]) != -1) {
            countToNumerals.push(exceptionLetters[exceptionNumbers.indexOf(userNumberTimes[i])]);
        } else {
            for (var z = 0; z < numbersBase.length; z++) {
                if (userNumberTimes[i] == numbersBase[z] * 2) {
                    countToNumerals.push(lettersBase[z]);
                    countToNumerals.push(lettersBase[z]);
                    break;
                } else if (userNumberTimes[i] == numbersBase[z] * 3) {
                    countToNumerals.push(lettersBase[z]);
                    countToNumerals.push(lettersBase[z]);
                    countToNumerals.push(lettersBase[z]);
                    break;
                } else if (z == numbersBase.length - 1) {
                    var toPush = weirdNumber(userNumberTimes[i]);
                    toPush = toPush.join("");
                    countToNumerals.push(toPush);
                    break;
                }
            }
        }
    }

    function weirdNumber(thing) {
      debugger;
        var toPush = [];
        var remainder;
        for (var n = numbersBase.length; n > 0; n--) {
            if (numbersBase[n] < thing) {
                toPush.push(lettersBase[n]);
                remainder = thing % numbersBase[n];
                n = 0;
            }
        }

        if (numbersBase.indexOf(remainder) != -1) {
            toPush.push(lettersBase[numbersBase.indexOf(remainder)]);
            return toPush;
        }

        for (var l = 0; l < numbersBase.length; l++) {
            if (remainder == numbersBase[l] * 2) {
                toPush.push(lettersBase[l]);
                toPush.push(lettersBase[l]);
            } else if (remainder == numbersBase[l] * 3) {
                toPush.push(lettersBase[l]);
                toPush.push(lettersBase[l]);
                toPush.push(lettersBase[l]);
            }
        }
        return toPush;
    }

    countToNumerals = countToNumerals.join("");
    return countToNumerals;
}
