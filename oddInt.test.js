const oddInt = require("./oddInt");

describe("oddInt", () => {
  it("returns the value that occurs an odd number of times", () => {
    expect(oddInt([7])).toEqual(7);
  });

  it("returns the value that occurs an odd number of times", () => {
    expect(oddInt([0])).toEqual(0);
  });

  it("returns the value that occurs an odd number of times when multiple values are given", () => {
    expect(oddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toEqual(4);
  });

  it("returns 'Array must have at least one value' if empty array", () => {
    expect(oddInt([])).toEqual("Array must have at least one value");
  });

  it("throws an error", () => {
    expect(() => oddInt("a")).toThrow("Argument must be an array");
  });
});
