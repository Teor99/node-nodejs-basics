import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const remove = async () => {
    const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(currentDir, './files/fileToRemove.txt');
    try {
        await fs.rm(filePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();
