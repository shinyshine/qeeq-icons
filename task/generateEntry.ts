import { src, dest } from "gulp";
import concat from 'gulp-concat';
import useTmpl from "./plugins/useTmpl";
import { transformStream } from './util';


export interface GenerateEntryOptions {
    from: string[];
    toDir: string;
    entryName: string
}
export default function generateEntry({
    from,
    toDir,
    entryName
}: GenerateEntryOptions) {
    return function generateEntryRunner() {
        return src(from)
            .pipe(transformStream(useTmpl({
                template: `export { default as <%= identifier %> } from '<%= path %>';`,
                mapMetaToInjector: ({ name }) => ({
                    identifier: name,
                    path: `./icons/${name}`
                })
            })))
            .pipe(concat(entryName))
            .pipe(dest(toDir))
    }
}