import { optimize } from 'svgo';
import { options } from './config';
import File from 'vinyl';


export default (beforeChunk: string, file: File) => {
    const res = optimize(beforeChunk, options);

    return res.data;
}