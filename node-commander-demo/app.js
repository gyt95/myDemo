const commander = require('commander')
const chalk = require('chalk')
// const {
//     magenta,bold
//   } = require('chalk');
// console.log(`\n  ${magenta('100')}`);
// console.log(`\n  ${bold('...~')}`);

function range(val) {
    return val.split('..').map(Number);
}

function list(val) {
    return val.split(',');
}

const program = 
commander
    .version('0.0.1')
    .usage('test，这句话是在顶部，作为命令行说明：')
    .option('-C, --chdir [value]', '设置服务器节点', '/home/conan/server')
    .option('-c, --config [value]', '设置配置文件', './deploy.conf')
    .option('-m, --max <n>', '最大连接数', parseInt)
    .option('-s, --seed <n>', '出始种子', parseFloat)
    .option('-r, --range <a>..<b>', '阈值区间', range)
    .option('-l, --list <items>', 'IP列表', list)

program
    .command('deploy <name>')
    .description('部署一个服务节点')
    .action(function(name){
        console.log()
        console.log('Deploying "%s"', name)
    })

program.parse(process.argv)

console.log('   chdir - %s', program.chdir)
console.log('   config - %s', program.config)
console.log('   max: %j', program.max)
console.log('   seed: %j', program.seed)
program.range = program.range || []
console.log(' range: %j..%j', program.range[0], program.range[1]);
console.log(' list: %j', program.list);

console.log()
console.log()
console.log(chalk.bold('90%'))
console.log(chalk.keyword('orange')('Yay for orange colored text!'))
console.log(chalk.magenta('100'))
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));


const log = console.log;
log()
log()
const error = chalk.bold.red;  
const warning = chalk.keyword('orange');
log(error('==============='))
log(warning('==============='))
log()
log()

// 组合样式和普通字符串
log(chalk.blue('Hello') + 'World' + chalk.red('!'));

// 组合多个样式
log(chalk.blue.bgWhite.bold('Hello world!'));

// 含多个函数
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// 嵌套样式
log(chalk.red('Hello', chalk.underline.bgGreen('world') + '!'));

// 混合嵌套样式 (color, underline, background) 
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

// 支持 ES6 模板字符串
log(`
CPU: ${chalk.red('90%')}
CPU: ${chalk.redBright('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
DISK: ${chalk.yellowBright('70%')}
DISK: ${chalk.magenta('70%')}
DISK: ${chalk.magentaBright('70%')}
`);

// 支持使用RGB颜色
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!')); // hex 和 rgb类似

const miles = 18;  
const calculateFeet = miles => miles * 5280;

log(chalk`  
  There are {blue.bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);


/**
 * 普通执行 
 * node app.js
 * 
 * 详细执行
 * node app.js -c /deploy/c1/config.conf -m 20 -s 19.1 -r 12..101 -l 192.168.1. 1,192.168.1.2,192.168.1.3 deploy server1

   Deploying "server1"
        chdir - /home/conan/server
        config - /deploy/c1/config.conf
        max: 20
        seed: 19.1
      range: 12..101
      list: ["192.168.1.1","192.168.1.2","192.168.1.3"]
 */