import fs from 'fs/promises';
import url from 'url';
import zlib from 'zlib';

const compress = async () => {
    const inputFilePath = url.fileURLToPath(
        new URL('./files/fileToCompress.txt', import.meta.url)
    );
    const outputFilePath = url.fileURLToPath(
        new URL('./files/archive.gz', import.meta.url)
    );

    const inputFileDescriptor = await fs.open(inputFilePath);
    const outputFileDescriptor = await fs.open(outputFilePath, 'w');

    inputFileDescriptor
        .createReadStream()
        .pipe(zlib.createGzip())
        .pipe(outputFileDescriptor.createWriteStream());
};

await compress();
