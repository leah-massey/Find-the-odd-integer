const oddInt = require("./oddInt");

describe("oddInt", () => {
  it("returns the value that occurs an odd number of times", () => {
    expect(oddInt([7])).toEqual(7);
  });

  it("returns the value that occurs an odd number of times", () => {
    expect(oddInt([0])).toEqual(0);
  });

  it("returns the value that occurs an odd number of times when multiple values are given", () => {
    expect(oddInt([1, 1, 2])).toEqual(2);
  });
});
