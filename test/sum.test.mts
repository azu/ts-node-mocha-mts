import * as assert from "assert";
import { sum } from "../src/sum.mjs";

describe("sum", () => {
    it("1 + 1 = 2", () => {
        assert.strictEqual(sum(1, 1), 2);
    });
});
