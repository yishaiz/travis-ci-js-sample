const chai = require("chai");

const expect = chai.expect;


describe("smoke test - chai", function () {
    it("checks equality", function () {
        // assert.equal(true, true);
        expect (true).to.be.true;
        // expect (true).to.be.false   ;
    });
});
