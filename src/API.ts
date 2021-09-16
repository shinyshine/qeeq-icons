import generateFonts from "./tasks/generateFonts";
import generateReactIcons from './tasks/generateReactIcons';
import { CommonArgv, ConfigOptions } from "./types";
import path from 'path';
import fs from 'fs';
import chalk from "chalk";
import { validate } from "./utils";


export interface GReactIconsOptions {
    typescript: boolean;
    needEntry: boolean;
    outputDir: string;
    entryName?: string;

}

class IconApi {
    baseDir: string = process.cwd();
    config: ConfigOptions = {};
    constructor(cmdArgv: CommonArgv) {
        const { config, baseDir } = cmdArgv;

        if(baseDir) {
            this.resolveBaseDir(baseDir);
        }

        if(config) {
            this.readConfigFile(config);
        }

    }

    resolveBaseDir(baseDir: string) {
        const basePath = path.resolve(this.baseDir, baseDir);

        this.baseDir = basePath;
    }

    readConfigFile(configPath: string) {
        if(path.extname(configPath) !== '.js') {
            console.log(chalk.red('只支持扩展名为.js的配置文件'))
            // process.exit(1);
            return;
        }

        try {
            const filePath = this.resolvePath(configPath);
            if(filePath) {
                const config = require(filePath);
                this.config = config;
            }            
        } catch(err) {
            console.log(chalk.red(err));
        }
    }

    resolvePath(configPath: string) {
        const filePaths = [
            path.resolve(configPath),
            path.join(this.baseDir, configPath),
            path.join(process.cwd(), configPath)
        ]

        console.log(chalk.blue('尝试查找配置文件'), filePaths)

        for(const filePath of filePaths) {
            if(fs.existsSync(filePath)) {
                return filePath;
            }
        }

        console.log(chalk.red('配置文件不存在'))

        return '';
    }

    resolvePaths(obj: any, pathKeys: string[]) {
        for(const key of pathKeys) {
            if(typeof obj[key] !== 'string') {
                delete obj[key];
            } else {
                obj[key] = path.resolve(this.baseDir, obj[key])
            }
        }
    }

    

    gFontsRunner() {
        const fontsConfig = this.config.fonts;
        if(fontsConfig) {
            console.log('g-fonts配置读取如下：', fontsConfig)
            const isValid = validate({
                svgs: "string",
            }, fontsConfig)

            if(!isValid) {
                console.log(chalk.red('必须指定源文件地址：svgs'))
                return;
            }

            // resolve path with baseDir
            this.resolvePaths(fontsConfig, ['svgs', 'fontsOutput', 'cssOutput', 'previewPath'])

            generateFonts(fontsConfig)
        } else {
            console.log(chalk.red('no config for g-fonts'))
        }
        
    }
    gReactIconsRunner() {
        const iconsConfig = this.config.reactIcons;

        if(iconsConfig) {
            const isConfigValid = validate({
                svgs: 'string'
            }, iconsConfig)

            if(isConfigValid) {
                this.resolvePaths(iconsConfig, ['output']);
                iconsConfig.svgsArray = [
                    path.join(this.baseDir, iconsConfig.svgs),
                    path.resolve(iconsConfig.svgs)
                ]
                console.log(iconsConfig)
    
                generateReactIcons(iconsConfig);
            }

        }
        
        
        
    }


    _configError() {
        console.log(chalk.red('配置文件不存在'));
        process.exit(1);
    }
}


export default IconApi;