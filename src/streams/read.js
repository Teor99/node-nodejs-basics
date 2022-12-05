import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const read = async () => {
    const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
    const targetFile = path.join(currentDir, './files/fileToRead.txt');
    const fileDescriptor = await fs.open(targetFile, 'r');
    const readStream = fileDescriptor.createReadStream();
    readStream.pipe(process.stdout);
};

await read();
