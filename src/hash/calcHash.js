import path from 'node:path';
import url from 'node:url';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';

const calculateHash = async () => {
    const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
    const targetFile = path.join(currentDir, './files/fileToCalculateHashFor.txt');
    const fileData = await fs.readFile(targetFile);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileData);
    console.log(hashSum.digest('hex'));
};

await calculateHash();
