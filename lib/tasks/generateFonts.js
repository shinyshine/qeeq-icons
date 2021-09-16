"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const webpack_iconfont_plugin_nodejs_1 = __importDefault(require("webpack-iconfont-plugin-nodejs"));
function generateFonts({ fontName = 'iconfont', svgs, fontsOutput = path_1.resolve('fonts'), cssOutput = path_1.resolve('fonts/_fonts.scss'), previewPath = path_1.resolve('fonts/preview.html'), formats = ['ttf', 'eot', 'woff2', 'woff', 'svg'], cssPrefix = 'icon', templatePath = path_1.join(__dirname, './templates/icon.scss.ejs'), onFinish }) {
    new webpack_iconfont_plugin_nodejs_1.default({
        svgs,
        fontName,
        fontsOutput,
        cssOutput,
        formats,
        cssPrefix,
        htmlOutput: previewPath,
        template: templatePath,
    })
        .build()
        .then(onFinish);
}
exports.default = generateFonts;
