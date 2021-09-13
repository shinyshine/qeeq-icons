import gs from 'glob-stream';
import { src } from 'gulp';
import { resolve, join } from "path";
import fs from "fs";
import transformStream from './util/transformStream'
import File from 'vinyl';



interface Props {
    dir: Array<string>;
}
function readSvgDir(props: Props) {
    const { dir } = props;

    const targetStream = fs.createWriteStream(resolve('../targetSvg.svg'))
    const streams = src(dir);

    streams.pipe(transformStream((chunk: string) => {
        console.log(chunk)
        return chunk;
    }));
    // streams.on('data', function(file, chunk) {
    //     console.log(file, chunk)
    // })

}

readSvgDir({
    dir: [resolve('../svg/*.svg')]
})