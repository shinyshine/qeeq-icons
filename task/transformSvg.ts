import { src, dest } from "gulp";
import { transformStream } from './util';
import svgoOptimize from './plugins/svgo/optimize';
import parseSvg from './plugins/parser'
import useTmpl from './plugins/useTmpl';
import rename from 'gulp-rename';
import getIdentifier from "./plugins/useTmpl/getIdentifier";

export interface TransformSvgOptions {
    from: string[],
    toDir: string
}


export default ({
    from,
    toDir
}: TransformSvgOptions) => 
    function transformSvgToAst() {
        return src(from)
            .pipe(transformStream(svgoOptimize)) // optimize svg
            .pipe(transformStream(parseSvg)) // to ast
            .pipe(transformStream(useTmpl({})))
            .pipe(rename(file => {
                if(file.basename) {
                    file.basename = getIdentifier(file.basename);
                    file.extname = '.tsx'
                }
            }))
            .pipe(dest(toDir))
    }
