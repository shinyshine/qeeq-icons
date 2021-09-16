"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const path_1 = __importStar(require("path"));
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
class Command {
    cmdPath;
    rawArgs;
    yargs;
    argv;
    actions = new Map();
    constructor() {
        this.cmdPath = path_1.join(__dirname, 'cmd');
        this.rawArgs = process.argv.slice(2);
        this.yargs = yargs_1.default(this.rawArgs);
        this.argv = this.yargs.argv;
        this.loadCommands();
    }
    loadCommands() {
        const cmdPath = this.cmdPath;
        const files = fs_1.default.readdirSync(this.cmdPath);
        files.forEach(filename => {
            const cmdName = path_1.default.basename(filename).replace(/\.(ts|js)$/, '');
            const cmdFullPath = path_1.default.join(cmdPath, filename);
            const cmdCls = require(cmdFullPath).default;
            this.actions.set(cmdName, cmdCls);
        });
    }
    dispatch() {
        this.yargs
            .completion()
            .help()
            .version()
            .alias('h', 'help');
        const actionName = this.argv._[0];
        if (this.actions.has(actionName)) {
            const action = this.actions.get(actionName);
            const options = this.yargs.parse(this.rawArgs);
            action(options);
            return;
        }
        console.error(chalk_1.default.red(`Command ${actionName} is not existed`));
    }
    start() {
        this.dispatch();
    }
}
exports.default = Command;
