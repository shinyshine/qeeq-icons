import { resolve, join } from "path";
import { readFileSync } from 'fs';
import { src, dest } from "gulp";
import concat from 'gulp-concat';
import { transformStream, promisfy, series, parallel } from './util';
import svgoOptimize from './plugins/svgo/optimize';
import parseSvg from './plugins/parser'
import useTmpl from './plugins/useTmpl';
import rename from 'gulp-rename';
import getIdentifier from "./plugins/useTmpl/getIdentifier";

import clean from './util/clean';
import copy from './util/copy';

export interface TransformSvgOptions {
    from: string[],
    toDir: string,
    template?: string,
    extname?: string
}

export interface GenerateEntryOptions {
    from: string[];
    toDir: string;
    entryName: string
}


export const generateReactIcons$1 =  ({
    from,
    toDir,
    template = '',
    extname = '.jsx'
}: TransformSvgOptions) => () => {
    return src(from)
        .pipe(transformStream(svgoOptimize)) // optimize svg
        .pipe(transformStream(parseSvg)) // to ast
        .pipe(transformStream(useTmpl({ template })))
        .pipe(rename(file => {
            if(file.basename) {
                file.basename = getIdentifier(file.basename);
                file.extname = extname
            }
        }))
        .pipe(dest(toDir))
}

export const generateEntry = ({
    from,
    toDir,
    entryName
}: GenerateEntryOptions) => {
    return function generateEntryRunner() {
        return src(from)
            .pipe(transformStream(useTmpl({
                template: `export { default as <%= identifier %> } from '<%= path %>';`,
                mapMetaToInjector: ({ name }) => ({
                    identifier: name,
                    path: `./components/${name}`
                })
            })))
            .pipe(concat(entryName))
            .pipe(dest(toDir))
    }
}


export interface GenerateReactIconsOptions {
    svgs: string; // svg源文件glob
    svgsArray: string[]; // 源文件glob数组
    isTsx?: boolean; // 是否生成tsx icons？
    output?: string; // 支持相对路径和绝对路径，默认值为cwd/icons
    template?: string; // todo: 自定义生成的jsx|tsx模板
}

export default function generateReactIcons(options: GenerateReactIconsOptions) {
    const { isTsx, output = 'icons', svgsArray } = options;
    // resolve output path
    const outputPath = resolve(output);
    const componentsPath = resolve(outputPath, 'components')


    series(
        clean([outputPath]),
        parallel(
            promisfy(generateReactIcons$1({
                from: svgsArray,
                toDir: componentsPath,
                extname: isTsx ? '.tsx' : '.jsx',
                template: readFileSync(
                    join(__dirname, `./templates/${isTsx ? 'ts/icon.tsx.ejs' : 'js/icon.jsx.ejs'}`),
                    'utf-8'
                )
            })),
            promisfy(copy({
                fromDir: [
                    join(__dirname, `./templates/${isTsx ? 'ts/*.ts' : 'js/*.js'}`), 
                    join(__dirname, `./templates/${isTsx ? 'ts/*.tsx' : 'js/*.jsx'}`),
                    join(__dirname, './templates/style.css'),
                ],
                toDir: outputPath
            }))
        ),
        promisfy(generateEntry({
            from: [`${componentsPath}/*.tsx`, `${componentsPath}/*.jsx`],
            toDir: outputPath,
            entryName: isTsx ? 'index.ts' : 'index.jsx'
        }))
    )

   
}