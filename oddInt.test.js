const oddInt = require("./oddInt");

describe("oddInt", () => {
  it("returns the value that occurs an odd number of times", () => {
    expect(oddInt([7])).toEqual(7);
  });
});
