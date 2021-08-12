import { series, parallel } from 'gulp';
import clean from './task/clean';
import copy from './task/copy';
import transformSvg from './task/transformSvg';
import generateEntry from './task/generateEntry';


export default series(
    clean(['src/asn', 'src/*.types.ts', 'src/index.ts', 'src/icons']),
    parallel(
        copy({
            fromDir: ['./task/templates/*.ts'],
            toDir: 'src'
        }),
        transformSvg({
            from: ['svg/*.svg'],
            toDir: 'src/icons'
        })
    ),
    // 生成入口文件
    generateEntry({
        from: ['src/icons/*.tsx'],
        toDir: 'src',
        entryName: 'index.ts'
    })
)



