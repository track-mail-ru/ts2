"use strict";
// objects
var stubResponse = {
    apiVersion: 'v3',
    who: 'are',
    you: '?',
};
console.log(stubResponse);
var makeBig;
makeBig = function (text, times) {
    if (times === void 0) { times = 1; }
    return ("I".repeat(times) + " * " + text + " * " + "I".repeat(times));
};
console.log(makeBig('martin', 7));
