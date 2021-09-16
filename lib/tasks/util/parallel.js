"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parallel(...tasks) {
    return () => Promise.all(tasks.map(task => task()));
}
exports.default = parallel;
