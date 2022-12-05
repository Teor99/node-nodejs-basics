import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs/promises';

const copy = async () => {
    const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
    const sourceDirPath = path.join(currentDir, './files');
    const destinationDirPath = path.join(currentDir, './files_copy');
    try {
        await fs.cp(sourceDirPath, destinationDirPath, {
            recursive: true,
            errorOnExist: true,
            force: false,
        });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

copy();
