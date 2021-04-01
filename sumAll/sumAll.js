const sumAll = function (a, b) {
  let sum = 0;
  let start;
  let end;

  // return ERROR if a or b is negative
  if (a < 0 || b < 0) {
    return 'ERROR';
  }

  // return ERROR if a or b are non-numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR';
  }

  // set start and end pts for sum loop
  if (a > b) {
    start = b;
    end = a;
  } else {
    start = a;
    end = b;
  }

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

module.exports = sumAll;
