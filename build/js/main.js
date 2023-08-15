"use strict";
let myName = 'code with mercy';
let meaning;
let isLoading;
let album;
const sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input. Both parameters must be numbers.');
    }
    return a + b;
};
