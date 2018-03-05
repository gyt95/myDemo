/*
 * @Author: gyt95.kwan 
 * @Date: 2017-11-16 14:34:33 
 * @Last Modified by: gyt95.kwan
 * @Last Modified time: 2018-03-05 11:27:36
 */
const fs = require('fs'),   // Nodejs文件系统模块
    path = require('path'), // Nodejs路径模块
    readline = require('readline'), // Nodejs逐行读取模块（实现输入输出）
    rl = readline.createInterface({  // 创建接口实例
        input: process.stdin,  // 进程监听输入，即输入流
        output: process.stdout // 进程监听输出，即输出流
    })
// process console都是nodejs的全局变量对象，可直接使用，不需要require

let sum = '', // 链接总数
    arr = [], // 文件名数组
    join = path.join,  // 多参数路径组合
    baseUrl = 'https://www.xxx.com/apk',  // 基础路径
    rootPath = './', // 根目录
    str = ''; // 链接名

console.log('>>> BEGIN >>>');

rl.question('输入游戏名拼音缩写：', gameName => {
    let read = path => {
        let files = fs.readdirSync(path);

        files.forEach(val => {
            let fPath = join(path, val),
                stats = fs.statSync(fPath);

            if (stats.isDirectory())
                read(fPath);
            if (stats.isFile())
                arr.push(fPath);
        });
    }

    let handle = () => {
        arr.filter(item => {      // 过滤掉后缀不匹配的文件
            return item.indexOf('.apk') != -1;
        }).map(item => {                 // 截取文件名
            return item.substr(item.indexOf('\\') + 1, item.length);
        }).sort((a, b) => {                // 重新排序
            a = a.split('_')[0];
            b = b.split('_')[0];
            return a - b;
        }).map(item => {                // 遍历数组并输出
            str = `${baseUrl}/${gameName}/${item}`
            console.log(str);
            sum += `str/\n`;
        })
    }

    read(rootPath);
    handle();

    console.log(`\n链接生成完毕！`);
    rl.close();
})

rl.on('close', () => {
    process.exit(0)
})

fs.writeFileSync('output.txt', sum);

