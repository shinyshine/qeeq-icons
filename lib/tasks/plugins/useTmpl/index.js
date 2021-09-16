"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const lodash_template_1 = __importDefault(require("lodash.template"));
const getIdentifier_1 = __importDefault(require("./getIdentifier"));
const iconTmpl = fs_1.readFileSync(path_1.resolve(__dirname, '../../templates/ts/icon.tsx.ejs'), 'utf-8');
const defaultMapper = (meta) => ({
    identifier: getIdentifier_1.default(meta.name),
    content: meta.content
});
function useTmpl({ template: customIconTmpl, mapMetaToInjector = defaultMapper }) {
    const executor = lodash_template_1.default(customIconTmpl || iconTmpl);
    return (content, file) => {
        const { stem: name } = file;
        return executor(mapMetaToInjector({ name, content }));
    };
}
exports.default = useTmpl;
