const oddInt = function (numberArray) {
  let oddNumber;
  numberArray.forEach((number) => {
    let numberCount = 0;
    numberArray.forEach((newNumber) => {
      if (newNumber === number) {
        numberCount++;
      }
    });
    if (numberCount % 2 !== 0) {
      oddNumber = number;
    }
  });
  return oddNumber;
};

module.exports = oddInt;
