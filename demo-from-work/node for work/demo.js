/*
 * @Author: gyt95.kwan 
 * @Date: 2017-11-16 14:34:33 
 * @Last Modified by: gyt95.kwan
 * @Last Modified time: 2017-11-16 15:22:35
 */

const fs = require('fs');

console.log('>>> BEGIN >>>');

const gameName = 'ahxy';
const baseUrl = `https://github.com/apk/${gameName}/`;

let sum = '';

let join = require('path').join;
function findSync(startPath) {
    let result = [];
    function finder(path) {
        let files = fs.readdirSync(path); //返回包含 指定目录(path)下所有文件名称 的一个数组
        
        files.forEach((val, index) => {
            let fPath = join(path, val);    
            let stats = fs.statSync(fPath); //返回stat对象，包含所有文件信息，主要用于判断是folder还是file

            //如果是目录，再次调用finder()，传入当期目录路径，用readdirSync()再次读取此目录下所有文件
            if(stats.isDirectory())
                finder(fPath);
            //如果是文件，则添加到result数组中
            if(stats.isFile()) 
                result.push(fPath);
        });
    }
    finder(startPath);

    //过滤掉多余文件
    let newArr = [];
    let last = result.filter(item => {
        if(item.indexOf('.apk')!=-1){
            return newArr.push(item.substr(item.indexOf('\\')+1, item.length-1));
        }
    })

    console.log('正在生成所有链接...')
    newArr.map(item => {
        console.log(baseUrl + item)
        sum += `${baseUrl}${item}\n`;
    })
}

let fileNames = findSync('./');

fs.writeFileSync('output.txt', sum);

console.log('>>> END >>>')