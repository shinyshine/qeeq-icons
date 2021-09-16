"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function promisfy(fun) {
    return () => new Promise(resolve => {
        fun().on('finish', function () {
            resolve(null);
        });
    });
}
exports.default = promisfy;
