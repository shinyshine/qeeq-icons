import { GenerateFontsOptions } from '../task/generateFonts';

export interface CommonCmdArgv extends CommonArgv {
    c?: string;
}

export interface CommonArgv {
    config?: string;
    baseDir?: string;
}


export interface ConfigOptions {
    fonts?: GenerateFontsOptions,
    reactIcons?: any;
    svgAst?: any;
}