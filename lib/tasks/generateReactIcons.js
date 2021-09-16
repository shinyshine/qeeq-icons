"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEntry = exports.generateReactIcons$1 = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const gulp_1 = require("gulp");
const gulp_concat_1 = __importDefault(require("gulp-concat"));
const util_1 = require("./util");
const optimize_1 = __importDefault(require("./plugins/svgo/optimize"));
const parser_1 = __importDefault(require("./plugins/parser"));
const useTmpl_1 = __importDefault(require("./plugins/useTmpl"));
const gulp_rename_1 = __importDefault(require("gulp-rename"));
const getIdentifier_1 = __importDefault(require("./plugins/useTmpl/getIdentifier"));
const clean_1 = __importDefault(require("./util/clean"));
const copy_1 = __importDefault(require("./util/copy"));
const generateReactIcons$1 = ({ from, toDir, template = '', extname = '.jsx' }) => () => {
    return gulp_1.src(from)
        .pipe(util_1.transformStream(optimize_1.default)) // optimize svg
        .pipe(util_1.transformStream(parser_1.default)) // to ast
        .pipe(util_1.transformStream(useTmpl_1.default({ template })))
        .pipe(gulp_rename_1.default(file => {
        if (file.basename) {
            file.basename = getIdentifier_1.default(file.basename);
            file.extname = extname;
        }
    }))
        .pipe(gulp_1.dest(toDir));
};
exports.generateReactIcons$1 = generateReactIcons$1;
const generateEntry = ({ from, toDir, entryName }) => {
    return function generateEntryRunner() {
        return gulp_1.src(from)
            .pipe(util_1.transformStream(useTmpl_1.default({
            template: `export { default as <%= identifier %> } from '<%= path %>';`,
            mapMetaToInjector: ({ name }) => ({
                identifier: name,
                path: `./components/${name}`
            })
        })))
            .pipe(gulp_concat_1.default(entryName))
            .pipe(gulp_1.dest(toDir));
    };
};
exports.generateEntry = generateEntry;
function generateReactIcons(options) {
    const { isTsx, output = 'icons', svgsArray } = options;
    // resolve output path
    const outputPath = path_1.resolve(output);
    const componentsPath = path_1.resolve(outputPath, 'components');
    util_1.series(clean_1.default([outputPath]), util_1.parallel(util_1.promisfy(exports.generateReactIcons$1({
        from: svgsArray,
        toDir: componentsPath,
        extname: isTsx ? '.tsx' : '.jsx',
        template: fs_1.readFileSync(path_1.join(__dirname, `./templates/${isTsx ? 'ts/icon.tsx.ejs' : 'js/icon.jsx.ejs'}`), 'utf-8')
    })), util_1.promisfy(copy_1.default({
        fromDir: [
            path_1.join(__dirname, `./templates/${isTsx ? 'ts/*.ts' : 'js/*.js'}`),
            path_1.join(__dirname, `./templates/${isTsx ? 'ts/*.tsx' : 'js/*.jsx'}`),
            path_1.join(__dirname, './templates/style.css'),
        ],
        toDir: outputPath
    }))), util_1.promisfy(exports.generateEntry({
        from: [`${componentsPath}/*.tsx`, `${componentsPath}/*.jsx`],
        toDir: outputPath,
        entryName: isTsx ? 'index.ts' : 'index.jsx'
    })));
}
exports.default = generateReactIcons;
