import path from 'node:path';
import url from 'node:url';
import fsPromise from 'node:fs/promises';
import fs from 'node:fs';

const rename = async () => {
    const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
    const sourceFilePath = path.join(currentDir, './files/wrongFilename.txt');
    const destFilePath = path.join(currentDir, './files/properFilename.md');
    try {
        if (fs.existsSync(sourceFilePath) && !fs.existsSync(destFilePath)) {
            fsPromise.rename(sourceFilePath, destFilePath);
        } else {
            throw new Error();
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();
