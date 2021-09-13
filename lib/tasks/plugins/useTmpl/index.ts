import { resolve } from 'path';
import { readFileSync } from 'fs';

import template from 'lodash.template';
import getIdentifier from './getIdentifier'
import File from 'vinyl';


const iconTmpl = readFileSync(
    resolve(__dirname, '../../templates/ts/icon.tsx.ejs'),
    'utf-8'
)
const defaultMapper = (meta: { name: string; content: string }) => ({
    identifier: getIdentifier(meta.name),
    content: meta.content
})

export interface UseTmplOptions {
    template?: string;
    mapMetaToInjector?: (meta: { name: string, content: string}) => object
}

export default function useTmpl({
    template: customIconTmpl,
    mapMetaToInjector = defaultMapper
}: UseTmplOptions) {
    const executor = template(customIconTmpl || iconTmpl);

    return (content: string, file: File) => {
        const {stem: name } = file;
        return executor(mapMetaToInjector({ name, content }))
    }
        
}
