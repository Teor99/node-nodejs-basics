import fs from 'fs/promises';
import url from 'url';
import zlib from 'zlib';

const decompress = async () => {
    const inputFilePath = url.fileURLToPath(
        new URL('./files/archive.gz', import.meta.url)
    );
    const outputFilePath = url.fileURLToPath(
        new URL('./files/fileToCompress.txt', import.meta.url)
    );

    const inputFileDescriptor = await fs.open(inputFilePath);
    const outputFileDescriptor = await fs.open(outputFilePath, 'w');

    inputFileDescriptor
        .createReadStream()
        .pipe(zlib.createUnzip())
        .pipe(outputFileDescriptor.createWriteStream());
};

await decompress();
