/*
 * @Author: gyt95.kwan 
 * @Date: 2017-11-16 14:34:33 
 * @Last Modified by: gyt95.kwan
 * @Last Modified time: 2018-03-02 11:32:46
 */
const fs = require('fs'),   // Nodejs文件系统模块
      path = require('path'), // Nodejs路径模块
      readline = require('readline'); // Nodejs逐行读取模块（实现输入输出）

console.log('>>> BEGIN >>>');

let sum = '', // 文件总数
    gameName='',   // 游戏包名
    join = path.join,  // 多参数路径组合
    fileNames = '', // 
    baseUrl = 'https://cdn.qitiangame.com/apk'  // 基础路径

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('输入游戏名拼音缩写：',function(answer){

    gameName = answer;
    baseUrl += `/${gameName}/`;
    fileNames = findSync('./');

    function findSync(startPath) {
        let result = [], arr = [];

        finder(startPath);
        filterFile();
        sortArr();

        function finder(path) {
            let files = fs.readdirSync(path); 
            
            files.forEach((val, index) => {
                let fPath = join(path, val),
                    stats = fs.statSync(fPath); 

                if(stats.isDirectory())
                    finder(fPath);
                if(stats.isFile()) 
                    result.push(fPath);
            });
        }

        function filterFile(){   //过滤掉后缀不匹配的文件
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
                return a-b;
            }).map(item => {
                console.log(baseUrl + item);
                sum += `${baseUrl}${item}\n`;
            })
        }
    }

    console.log('');
    console.log('链接生成完毕！');
    rl.close();
})

rl.on('close',function(){
    process.exit(0)
})

fs.writeFileSync('link.txt', sum);

