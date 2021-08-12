import through from 'through2';
import File from 'vinyl';

export default function transformStream(
    callback: (raw: string, file?: File) => string
) {
    return through.obj((file: File, enc, next) => {
        if(file.isBuffer()) {
            const beforeChunk = file.contents.toString(enc);
            
            try {
                const afterChunk = callback(beforeChunk, file);
                file.contents = Buffer.from(afterChunk);

                next(null, file)
            } catch(err) {
                next(err, null)
            }
        } else {
            next(null, file)
        }
    })
}