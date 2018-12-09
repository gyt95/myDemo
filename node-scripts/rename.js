/*
 * @Author: gyt95.kwan 
 * @Date: 2018-12-09 16:15:11 
 * @Last Modified by: gyt95.kwan
 * @Last Modified time: 2018-12-09 17:32:29
 */

// 重命名文件，改为拼音首字母拼接

/* 场景：
 * 有3个icon，分别是运输中.png、派件中.png、已收件.png，
 * 现要改为拼音首字母拼接，另加"icon"前缀 
 */

const path = require('path'),
      fs = require('fs'),
      pinyin = require('pinyin');

let currPath = path.join(__dirname, '/web/');

function run(path, callback){
    let files = fs.readdirSync(path);

    files.forEach(file => {
        if(fs.statSync(path + '/' + file).isFile()){
            callback(path, file)
        }
    })
}

function rename(oldPath, newPath){
    fs.rename(oldPath, newPath, err => {
        if(err) throw err;
    })
}

run(currPath, (path, fileName) => {
    let suffix = fileName.substr(-4),
        filterName = fileName.substr(0, fileName.indexOf('.')),
        prefix = fileName.indexOf('icon') == -1 ? 'icon-' : '',
        arr = [];
    
    pinyin(filterName, {
        style: pinyin.STYLE_FIRST_LETTER,
        // heteronym: true // 多音字模式开启后，如该字有多音字会全部列入数组中，如简单重命名时开启，会出现多余的英文字母
    }).forEach(v => {
        arr = arr.concat(v)
    })

    let oldPath = path + '/' + fileName,
        newPath = path + '/' + prefix + arr.join('') + suffix;

    rename(oldPath, newPath)
})
