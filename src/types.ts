import { GenerateFontsOptions } from './tasks/generateFonts';
import { GenerateReactIconsOptions } from './tasks/generateReactIcons';

export interface CommonCmdArgv extends CommonArgv {
    c?: string;
}

export interface CommonArgv {
    config?: string;
    baseDir?: string;
}


export interface ConfigOptions {
    fonts?: GenerateFontsOptions,
    reactIcons?: GenerateReactIconsOptions;
}