const oddInt = function (numberArray) {
  if (!Array.isArray(numberArray)) {
    throw new Error("Argument must be an array");
  }
  if (numberArray.length === 0) {
    return "Array must have at least one value";
  }

  let oddNumber;
  console.log(`this is odd number value ${oddNumber}`);
  numberArray.forEach((number) => {
    let numberCount = 0;
    numberArray.forEach((newNumber) => {
      if (newNumber === number) {
        numberCount++;
      }
    });
    if (numberCount % 2 !== 0) {
      if (typeof oddNumber === "undefined") {
        oddNumber = number;
      } else {
        oddNumber = "Multiple values appear an odd number of times";
      }
    }
  });

  if (typeof oddNumber === "undefined") {
    return "No values appear an odd number of times";
  } else {
    return oddNumber;
  }
};

module.exports = oddInt;
