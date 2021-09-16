"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const API_1 = __importDefault(require("../API"));
function gFonts(cmdOptions) {
    console.log(chalk_1.default.blue('resolving cmd options'));
    const formatArgv = {
        config: cmdOptions.config || cmdOptions.c,
        baseDir: cmdOptions.baseDir
    };
    new API_1.default(formatArgv).gReactIconsRunner();
}
exports.default = gFonts;
