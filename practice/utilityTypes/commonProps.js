"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Partial
var Parial;
(function (Parial) {
    function updateTodo(todo, fieldsToUpdate) {
        return __assign(__assign({}, todo), fieldsToUpdate);
    }
    var todo1 = {
        title: 'organize desk',
        description: 'clear clutter',
    };
    var todo2 = updateTodo(todo1, {
        description: 'throw out trash',
    });
    console.log("Partial: " + todo2.title + " " + todo2.description);
})(Parial || (Parial = {}));
// Readonly
var ReadOnly;
(function (ReadOnly) {
    var todo = {
        title: 'Delete inactive users',
    };
    try {
        todo.title = 'Hello';
        console.log('ReadOnly: ' + todo.title); // this
    }
    catch (_a) {
        console.log('Cannot assign to "title" because it is a read-only property.'); // or this?
    }
})(ReadOnly || (ReadOnly = {}));
var Required;
(function (Required) {
    ;
    var obj = { a: 5 }; // OK
    var obj2 = { a: 5 }; // Error: property 'b' missing
    console.log("Required: " + obj2.a);
})(Required || (Required = {}));
