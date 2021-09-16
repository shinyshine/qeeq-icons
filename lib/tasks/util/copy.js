"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
function copy({ fromDir, toDir }) {
    return () => {
        return gulp_1.src(fromDir).pipe(gulp_1.dest(toDir));
    };
}
exports.default = copy;
