import { resolve, join } from 'path';
import WebpackIconfontPluginNodejs from 'webpack-iconfont-plugin-nodejs';

export interface GenerateFontsOptions {
    svgs: string;
    fontsOutput?: string;
    cssOutput?: string;
    previewPath?: string;
    formats?: string[];
    cssPrefix?: string;
    fontName?: string;
    templatePath?: string;
    onFinish?: () => void;
}

export default function generateFonts({
    fontName = 'iconfont',
    svgs,
    fontsOutput = resolve('fonts'),
    cssOutput = resolve('fonts/_fonts.scss'),
    previewPath = resolve('fonts/preview.html'),
    formats = ['ttf', 'eot', 'woff2', 'woff', 'svg'],
    cssPrefix = 'icon',
    templatePath = join(__dirname, './templates/icon.scss.ejs'),
    onFinish
}: GenerateFontsOptions) {

    new WebpackIconfontPluginNodejs({
        svgs,
        fontName,
        fontsOutput,
        cssOutput,
        formats,
        cssPrefix,
        htmlOutput: previewPath,
        template: templatePath,
    })
        .build()
        .then(onFinish)
}