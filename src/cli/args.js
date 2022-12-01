const parseArgs = () => {
    const args = [];
    for (let i = 2; i < process.argv.length; i += 2) {
        const argName = process.argv[i];
        const argValue = process.argv[i + 1];
        args.push(`${argName}=${argValue}`);
    }
    console.log(args.join(', '));
};

parseArgs();
