const Readable = require('stream').Readable;
const fs = require('fs');
const path = require('path');
const parseXml = require('@rgrove/parse-xml');

class myReadable extends Readable {
    num = 0;

    _read() {
        console.log('======_read=======', this.num)
        this.num ++;

        if(this.num <= 3) {
            const file = fs.readFileSync(path.join(__dirname, '..', 'svg2/AC.svg'));
            this.push(file)
        } else {
            this.push(null)
        }
    }
}


const read = new myReadable();

read.on('data', function(chunk) {
    console.log('==========on data ========')
    const astNode = parseXml(chunk.toString())
    console.log(astNode)

})