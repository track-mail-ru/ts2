"use strict";
var sum;
var noisy = function (func) {
    var wrapper = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('ppphhhhffffchfiu');
        var res = func.apply(void 0, args);
        console.log(res);
        console.log('khhhhheeeeeefffph');
        return res;
    };
    return wrapper;
};
sum = function (a, b) { return (a + b); };
var noisySum = noisy(sum);
noisySum(1, 15);
