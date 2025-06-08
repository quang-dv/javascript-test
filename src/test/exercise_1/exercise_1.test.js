import { countDataTypes } from "../../exercises/exercise_1/task_1.js";
import { getOddNumbers } from "../../exercises/exercise_1/task_2.js";
import { getArrayByIndex } from "../../exercises/exercise_1/task_3.js";
const expect = chai.expect;

describe("task 1: countDataTypes function", () => {
  it("should return an empty object when the input parameter is not an array", () => {
    const result = countDataTypes("not an array");
    expect(result).to.be.an("object").that.is.empty;
  });
  it("should return an empty object when the input array is empty", () => {
    const result = countDataTypes([]);
    expect(result).to.be.an("object").that.is.empty;
  });
  it("should return correctly count data type object when data is valid", () => {
    const result = countDataTypes([1, "hello", true, 42, "world", false]);
    expect(result).to.deep.equal({
      number: 2,
      string: 2,
      boolean: 2,
    });
  });
  it("should return correctly count data type object when input array has other data types", () => {
    const result = countDataTypes([
      1,
      "hello",
      true,
      42,
      "world",
      false,
      { object: "object" },
    ]);
    expect(result).to.deep.equal({
      number: 2,
      string: 2,
      boolean: 2,
    });
  });
});

describe("task 2: filterArray function", () => {
  it("should return an empty array when input array is empty", () => {
    const result = getOddNumbers([]);
    expect(result).to.be.an("array").that.is.empty;
  });

  it("should return correctly array when input array valid", () => {
    const result = getOddNumbers([1, 2, 3, 4, 5]);
    expect(result).to.deep.equal([1, 3, 5]);
  });
});

describe("task 3: getArrayByIndex function", () => {
  it("should return an empty array when the input parameter is not an array", () => {
    const result = getArrayByIndex("data not an array");
    expect(result).to.be.an("array").that.is.empty;
  });

  it("should return an empty array when the provided n is invalid", () => {
    const result = getArrayByIndex([1, 2, 3, 4], -1);
    expect(result).to.be.an("array").that.is.empty;
  });

  it("should return an empty array when the provided n not a number", () => {
    const result = getArrayByIndex([1, 2, 3, 4], "data not a number");
    expect(result).to.be.an("array").that.is.empty;
  });

  it("should return an array containing the first element of the input array", () => {
    const result = getArrayByIndex([1, 2, 3, 4]);
    expect(result).to.deep.equal([1]);
  });
  it("should return the correct array when the provided n is valid", () => {
    const result = getArrayByIndex([1, 2, 3, 4], 2);
    expect(result).to.deep.equal([1, 2]);
  });

  it("should return the original array when n is greater than the number of elements in the array", () => {
    const result = getArrayByIndex([1, 2, 3, 4], 10);
    expect(result).to.deep.equal([1, 2, 3, 4]);
  });
});
