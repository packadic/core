/// <reference path="src/scripts/types.d.ts" />
import * as sass from 'node-sass';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as chalk from 'chalk';


sass.render({
    file: 'src/styles/stylesheet.scss'
}, (err:sass.SassError, res:sass.Result) => {
    console.log(err);

    var files:string[] = [];
    res.stats.includedFiles.forEach((filePath:string) => {
        filePath = filePath.replace(process.cwd() + '/', '');
        if(filePath.slice(0, 3) === 'src') return;
        files.push(filePath);
        fs.copySync(filePath, path.join('dist', filePath));
        console.log(chalk.green.bold('>') + ' Copied file ' + chalk.blue(filePath));
    });
    //console.log(files);
    process.exit();
});
