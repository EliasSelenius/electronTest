"use strict";
var vec3 = /** @class */ (function () {
    function vec3(x, y, z) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.z = z ? z : 0;
    }
    return vec3;
}());
var vec2 = /** @class */ (function () {
    function vec2(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }
    return vec2;
}());
/// <reference path="./vectors.ts" />
var electron = require('electron');
console.log(electron);
