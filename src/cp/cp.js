import cp from 'child_process';
import url from 'url';

const spawnChildProcess = async (args) => {
    const scriptFilePath = url.fileURLToPath(new URL('./files/script.js', import.meta.url));
    cp.fork(scriptFilePath, args);
};

spawnChildProcess();
