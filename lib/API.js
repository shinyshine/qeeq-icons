"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateFonts_1 = __importDefault(require("./tasks/generateFonts"));
const generateReactIcons_1 = __importDefault(require("./tasks/generateReactIcons"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
const utils_1 = require("./utils");
class IconApi {
    baseDir = process.cwd();
    config = {};
    constructor(cmdArgv) {
        const { config, baseDir } = cmdArgv;
        if (baseDir) {
            this.resolveBaseDir(baseDir);
        }
        if (config) {
            this.readConfigFile(config);
        }
    }
    resolveBaseDir(baseDir) {
        const basePath = path_1.default.resolve(this.baseDir, baseDir);
        this.baseDir = basePath;
    }
    readConfigFile(configPath) {
        if (path_1.default.extname(configPath) !== '.js') {
            console.log(chalk_1.default.red('只支持扩展名为.js的配置文件'));
            // process.exit(1);
            return;
        }
        try {
            const filePath = this.resolvePath(configPath);
            if (filePath) {
                const config = require(filePath);
                this.config = config;
            }
        }
        catch (err) {
            console.log(chalk_1.default.red(err));
        }
    }
    resolvePath(configPath) {
        const filePaths = [
            path_1.default.resolve(configPath),
            path_1.default.join(this.baseDir, configPath),
            path_1.default.join(process.cwd(), configPath)
        ];
        console.log(filePaths);
        for (const filePath of filePaths) {
            if (fs_1.default.existsSync(filePath)) {
                return filePath;
            }
        }
        return '';
    }
    resolvePaths(obj, pathKeys) {
        for (const key of pathKeys) {
            if (typeof obj[key] !== 'string') {
                delete obj[key];
            }
            else {
                obj[key] = path_1.default.resolve(this.baseDir, obj[key]);
            }
        }
    }
    gFontsRunner() {
        const fontsConfig = this.config.fonts;
        if (fontsConfig) {
            const isValid = utils_1.validate({
                svgs: "string",
            }, fontsConfig);
            console.log('isValid', isValid);
            if (!isValid) {
                return;
            }
            // fontsConfig.svgs = this.resolvePath(fontsConfig.svgs); 
            // 根据baseDir来resolve输出位置
            this.resolvePaths(fontsConfig, ['fontsOutput', 'cssOutput', 'previewPath']);
            generateFonts_1.default(fontsConfig);
        }
    }
    gReactIconsRunner() {
        const iconsConfig = this.config.reactIcons;
        if (iconsConfig) {
            const isConfigValid = utils_1.validate({
                svgs: 'string'
            }, iconsConfig);
            if (isConfigValid) {
                this.resolvePaths(iconsConfig, ['output']);
                iconsConfig.svgsArray = [
                    path_1.default.join(this.baseDir, iconsConfig.svgs),
                    path_1.default.resolve(iconsConfig.svgs)
                ];
                console.log(iconsConfig);
                generateReactIcons_1.default(iconsConfig);
            }
        }
    }
    _configError() {
        console.log(chalk_1.default.red('配置文件不存在'));
        process.exit(1);
    }
}
exports.default = IconApi;
