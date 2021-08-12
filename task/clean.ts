import del from 'del';

export default function clean(dirs: string[]) {
    return function cleanSrc() {
        return del(dirs);
    }
}
