import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const create = async () => {
    const dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(dirname, './files/fresh.txt');

    try {
        await fs.writeFile(filePath, 'I am fresh and young', {
            encoding: 'utf8',
            flag: 'wx',
        });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();
