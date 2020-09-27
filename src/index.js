module.exports = function toReadable(number) {
  const numbers = {
    ones: {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
    },
    teens: {
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
    },
    tens: {
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
    }
  };

  return (function buildStringFromNumber(currNum, out = []) {
    if (currNum > 99) {
      out.push(numbers.ones[Math.trunc(currNum / 100)] + ' hundred');

      currNum %= 100;
    } else if (currNum > 19) {
      out.push(numbers.tens[Math.trunc(currNum / 10) * 10]);

      currNum %= 10;
    } else if (10 < currNum && currNum < 20) {
      out.push(numbers.teens[Math.trunc(currNum)]);

      return out;
    } else if (currNum < 11) {
      out.push(numbers.ones[currNum]);

      return out;
    }

    if (!currNum)
      return out;

    if (!currNum && !out.length)
      return numbers.ones[currNum];

    return buildStringFromNumber(currNum, out)
  })(number).join(' ');
}
