const leapYears = function (year) {
  // check for century years
  if (year % 100 === 0) {
    return year % 400 === 0 ? true : false;
  }

  // check non-century years
  if (year % 4 === 0) {
    return true;
  }

  // default return bool set to false
  return false;
};

module.exports = leapYears;
