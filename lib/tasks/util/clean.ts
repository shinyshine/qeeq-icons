import del from 'del';

export default function clean(dirs: string[]) {
    return () => {
        return del(dirs)
    };
}
