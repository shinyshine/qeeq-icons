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

        console.log(filePaths)

        for(const filePath of filePaths) {
            if(fs.existsSync(filePath)) {
                return filePath;
            }
        }

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
            const isValid = validate({
                svgs: "string",
            }, fontsConfig)

            console.log('isValid', isValid)

            if(!isValid) {
        
                return;
            }
            // fontsConfig.svgs = this.resolvePath(fontsConfig.svgs); 

            // 根据baseDir来resolve输出位置
            this.resolvePaths(fontsConfig, ['fontsOutput', 'cssOutput', 'previewPath'])

            generateFonts(fontsConfig)
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