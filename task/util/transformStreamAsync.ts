import through from 'through2';
import File from 'vinyl';

export default function transformStreamAsync(
    callback: (raw: string) => Promise<string>
) {
    return through.obj((file: File, enc, next) => {
        if(file.isBuffer()) {
            const beforeChunk = file.contents.toString(enc);
            callback(beforeChunk)
                .then((afterChunk) => {
                    file.contents = Buffer.from(afterChunk);
                    next(null, file)
                })
                .catch((err) => {
                    next(err, null)
                })
        } else {
            next(null, file)
        }
    })
}