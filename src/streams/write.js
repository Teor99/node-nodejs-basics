import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const write = async () => {
    const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
    const targetFile = path.join(currentDir, './files/fileToWrite.txt');
    const fileDescriptor = await fs.open(targetFile, 'w');
    const writeStream = fileDescriptor.createWriteStream();
    process.stdin.pipe(writeStream);
};

await write();