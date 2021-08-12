import gs from 'glob-stream';
import { resolve, join } from "path";
import fs from "fs";


interface Props {
    dir: Array<string>;
}
function readSvgDir(props: Props) {
    const { dir } = props;

    const targetStream = fs.createWriteStream(resolve('../targetSvg.svg'))
    const streams = gs(dir);

    streams.pipe(targetStream)

}

readSvgDir({
    dir: [resolve('../svg/*.svg')]
})