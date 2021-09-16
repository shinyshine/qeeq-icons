"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const chalk_1 = __importDefault(require("chalk"));
const validate = (rules, obj) => {
    const ruleKeys = Object.keys(rules);
    const errKeys = [];
    if (!obj) {
        return false;
    }
    for (const ruleKey of ruleKeys) {
        const ruleType = rules[ruleKey];
        if (typeof obj[ruleKey] !== ruleType) {
            errKeys.push(ruleKey);
        }
    }
    if (errKeys.length) {
        console.log(chalk_1.default.red(`${errKeys.concat(',')} 参数确实或格式不正确`));
        return false;
    }
    return true;
};
exports.validate = validate;
