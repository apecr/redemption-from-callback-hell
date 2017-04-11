"use strict";
var assert = require("assert");
var should = require("chai").should();
var promisesEx = require("../we-have-problems-with-promises");

describe("Uses of promises", () => {
    it("Should print foo and not bar", (done) => {
        //Act
        var result = promisesEx.printTheFirstNotTheSecond();
        //Assert
        result.then(function (result) {
            assert.equal(result, "foo", "");
            done();
        }).catch(function (err) {
            done(err);
        });
    });
    it("Should print bar and not foo", (done) => {
        //Act
        var result = promisesEx.printTheSecondNotTheFirst();
        //Assert
        result.then(function (result) {
            assert.equal(result, "bar", "");
            done();
        }).catch(function (err) {
            done(err);
        });
    });
});


