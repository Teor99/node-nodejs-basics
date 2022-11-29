import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const create = async () => {
    const dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(dirname, './files/fresh.txt');

    try {
        await fs.access(filePath, fs.constants.F_OK);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code == 'ENOENT') {
            await fs.writeFile(filePath, 'I am fresh and young', 'utf8');
        } else {
            throw error;
        }
    }
};

await create();
