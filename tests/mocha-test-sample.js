const assert = require("assert");

describe("smoke test", function () {
    it("checks equality", function () {
        assert.equal(true, true);
    });
});


describe("smoke test - ES6", () => {
    it("checks equality", () => {
        assert.equal(true, true);
    });
});