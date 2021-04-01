const ftoc = function (num) {
  const tempInC = (num - 32) * (5 / 9);
  const rounded = parseFloat(tempInC.toFixed(1));
  return rounded;
};

const ctof = function (num) {
  const tempInF = num * (9 / 5) + 32;
  const rounded = parseFloat(tempInF.toFixed(1));
  return rounded;
};

module.exports = {
  ftoc,
  ctof,
};
