import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const read = async () => {
    const dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const targetFile = path.join(dirname, './files/fileToRead.txt');

    try {
        const content = await fs.readFile(targetFile, { encoding: 'utf8' });
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
