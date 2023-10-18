import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { add, divide } from "./calculator.js";

describe("Calculator", () => {
  it("can add two numbers", () => {
    const result = add(2, 5);
    assert.strictEqual(result, 7);
  });

  it("can divide two numbers", () => {
    const result = divide(15, 5);
    assert.strictEqual(result, 3);
  });
});
