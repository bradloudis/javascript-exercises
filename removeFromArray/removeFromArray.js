const removeFromArray = function (array, ...items) {
  for (let item of items) {
    const index = array.indexOf(item);
    if (index === -1) {
      continue;
    } else {
      array.splice(index, 1);
    }
  }

  return array;
};

module.exports = removeFromArray;
