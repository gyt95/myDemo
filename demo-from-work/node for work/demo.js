/*
 * @Author: gyt95.kwan 
 * @Date: 2017-11-16 14:34:33 
 * @Last Modified by: gyt95.kwan
 * @Last Modified time: 2017-12-27 10:41:21
 */
const fs = require('fs'),
      gameName = 'gjyp',
      baseUrl = `https://cdn.qitiangame.com/apk/${gameName}/`;

console.log('>>> BEGIN >>>');
console.log('正在生成所有链接...');

let sum = '',
    join = require('path').join,
    fileNames = findSync('./');

function findSync(startPath) {
    let result = [], arr = [];

    finder(startPath);
    filterFile();
    sortArr();

    function finder(path) {
        let files = fs.readdirSync(path); //返回包含 指定目录下所有文件名称 的一个数组
        
        files.forEach((val, index) => {
            let fPath = join(path, val),
                stats = fs.statSync(fPath); //返回stat对象，包含所有文件信息，主要用于判断是folder还是file

            //如果是目录，再次调用finder()，传入当期目录路径，用readdirSync()再次读取此目录下所有文件
            if(stats.isDirectory())
                finder(fPath);
            //如果是文件，则添加到result数组中
            if(stats.isFile()) 
                result.push(fPath);
        });
    }

    function filterFile(){  //过滤掉多余文件
        result.filter(item => {
            if(item.indexOf('.apk')!=-1){
                return arr.push(item.substr(item.indexOf('\\')+1, item.length));
            }
        })
    }

    function sortArr(){
        arr.sort((a,b)=>{
            a = a.split('_')[0];
            b = b.split('_')[0];
            return a-b; //a-b输出从小到大排序，b-a输出从大到小排序
        }).map(item => {
            console.log(baseUrl + item);
            sum += `${baseUrl}${item}\n`;
        })
    }
}

fs.writeFileSync('link.txt', sum);

console.log('>>> END >>>');