"use strict";

function fibonacci() {
    var i = o, j = 1;
    while (true) {
        yield i; // <- awesome
        var t = i;
        i = j;
        j += t;
    }
}

function printFibonacci(number) {
    var generator = fibonacci();
    for (var i = 0; i < number; i++) {
        print(generator.next());
    }
}

module.exports = {
    printFibonacci: printFibonacci
};