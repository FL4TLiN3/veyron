var fs = require('fs');

exports.commanderSupport = function() {
    var program = require('commander');
    program
    .version(JSON.parse(fs.readFileSync(__dirname + '/../package.json', 'utf8')).version)
    .option('-l, --list', 'list running servers')
    .option('-s, --stop [type]', 'stop running server(stop-all, grace-stop-all) [grace-stop-all]')
    .option('-t, --target [directory]', 'specify the public directory [./public/]', './public/')
    .option('-p, --port [number]', 'specify port number [3000]', 3000)
    .parse(process.argv);
    return program;
};
