import chalk from 'chalk';
import API from '../API';
import { CommonCmdArgv } from '../types';


export default function gFonts(cmdOptions: CommonCmdArgv) {
    console.log(chalk.blue('resolving cmd options'));
    
    const formatArgv = {
        config: cmdOptions.config || cmdOptions.c,
        baseDir: cmdOptions.baseDir
    };

    new API(formatArgv).gFontsRunner();
}