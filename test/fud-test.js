"use strict"

const fud = require("../fud");

describe("Exercices from talk ", function () {
    it("Should take the console log for the file", function () {
        fud.executePromise("./docs/talk.text");
    });
    it("Should take the console error for the non existing file", function () {
        fud.executePromise("./docs/talkssss.text");
    });
});