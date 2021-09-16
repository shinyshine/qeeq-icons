import yargs from 'yargs';
import path, { resolve, join } from 'path';
import fs from 'fs';
import chalk from 'chalk';

class Command {
    cmdPath: string;
    rawArgs: string[];
    yargs: yargs.Argv<{}>;
    argv: yargs.Argv<{}>['argv'];
    private actions = new Map();

    constructor() {
        this.cmdPath = join(__dirname, 'cmd');
        this.rawArgs = process.argv.slice(2);

        this.yargs = yargs(this.rawArgs);
        this.argv = this.yargs.argv;

        this.loadCommands();
    }

    loadCommands() {
        const cmdPath = this.cmdPath;
        const files = fs.readdirSync(this.cmdPath);

        files.forEach(filename => {
            const cmdName = path.basename(filename).replace(/\.(ts|js)$/, '');
            const cmdFullPath = path.join(cmdPath, filename);

            const cmdCls = require(cmdFullPath).default;

            this.actions.set(cmdName, cmdCls);
        })
    }

    private dispatch() {
        this.yargs
            .completion()
            .help()
            .version()
            .alias('h', 'help');

        const actionName = (this.argv as any)._[0];

        if(this.actions.has(actionName)) {
            const action = this.actions.get(actionName);
            const options = this.yargs.parse(this.rawArgs);

            action(options);

            return;
        }


        console.error(chalk.red(`Command ${actionName} is not existed`));
    }

    start() {
        this.dispatch();
    }
}

export default Command;


