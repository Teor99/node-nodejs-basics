import { Transform } from 'node:stream';
import { EOL } from 'node:os';

class ReverseStream extends Transform {
    constructor(opts) {
        super(opts);
    }

    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().split('').reverse().join(''));
        this.push(EOL);
        callback();
    }

    _flush(callback) {
        callback();
    }
}

const transform = async () => {
    process.stdin.pipe(new ReverseStream()).pipe(process.stdout);
};

await transform();
