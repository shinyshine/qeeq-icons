
module.exports = {
    // baseDir: "",
    fonts: {
        fontName: 'icomoon',
        svgs: "svg/*.svg",
        fontsOutput: "fonts",
        cssOutput: "fonts/_font.css",
        previewPath: "fonts/font-preview.html",
        cssPrefix: 'icon',
        formats: ['ttf', 'eot', 'woff2', 'woff', 'svg'],
        onFinish: function() {
            console.log('已生成字体文件，可以上传fonts文件')
        }
    },
    reactIcons: {
        svgs: 'svg/*.svg',
        output: 'icons',
        // needEntry: true,
        typescript: false,
        template: ''

    },
    svgAst: {
        
    }
}