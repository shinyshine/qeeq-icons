"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const lodash_upperfirst_1 = __importDefault(require("lodash.upperfirst"));
const lodash_camelcase_1 = __importDefault(require("lodash.camelcase"));
exports.default = ramda_1.pipe((name) => name, lodash_camelcase_1.default, lodash_upperfirst_1.default);
