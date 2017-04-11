var fs = require("fs");
var q = require("q");

module.exports = {
    executePromise: executePromise
}

function executePromise(filename) {
    var readFile = q.denodeify(fs.readFile);
    var promise = readFile(filename, "utf8");

    promise.then(console.log, console.error);
}

