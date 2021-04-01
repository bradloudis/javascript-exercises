const repeatString = function (string, num) {
  let returnString = '';

  // return 'ERROR' if num is negative
  if (num < 0) {
    return 'ERROR';
  }

  for (let i = 1; i <= num; i++) {
    returnString += string;
  }
  return returnString;
};

module.exports = repeatString;
