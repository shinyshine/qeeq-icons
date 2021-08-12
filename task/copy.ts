import { src, dest } from "gulp";

export interface CopyProps {
    fromDir: string[];
    toDir: string;
}

export default function copy({ fromDir, toDir } : CopyProps) {
    return function copyTmplFiles() {
        return src(fromDir).pipe(dest(toDir))
    }
}