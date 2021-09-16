"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const svgo_1 = require("svgo");
const config_1 = require("./config");
exports.default = (beforeChunk, file) => {
    const res = svgo_1.optimize(beforeChunk, config_1.options);
    return res.data;
};
