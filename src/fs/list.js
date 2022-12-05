import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const list = async () => {
    const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
    const targetDir = path.join(currentDir, './files');
    try {
        const list = await fs.opendir(targetDir);
        for await (const entry of list) {
            const entryStat = await fs.lstat(path.join(targetDir, entry.name));
            if (entryStat.isFile()) {
                console.log(entry.name);
            }
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
