/*
 * @Author: gyt95.kwan 
 * @Date: 2018-06-10 14:37:07 
 * @Last Modified by: gyt95.kwan
 * @Last Modified time: 2018-06-10 14:51:29
 */

const path = require('path')
const fs = require('fs')

console.log(__dirname) // 显示绝对路径
// path.join() // 各个参数都是path，连接起来生成一个路径
let p = path.join(__dirname, '/Assets')
console.log(p)

// 区别于readFile(),readdir读取目录/文件夹内容,readFile读取文件内容
fs.readdir(p, (err, data) => {
    if(err) console.log(err)
    
    // 用node的fs模块来创建文件夹时注意:
    // 1.用同步创建需要try-catch,否则如果文件夹已存在会报错,而用异步创建只需要写callback即可
    // 2.原以为fs.mkdir(路径, 文件名, callback),实际是先path.join创建新文件夹路径,再mkdir创建目录
    let newDir = path.join(p, 'pic')
    try{
        fs.mkdirSync(newDir)
    }catch(e){
        console.log('无需创建,文件夹已存在')
    }

    data.forEach(v => {
        let currPath = path.join(p, v),  // 每个文件的路径
            str = '',
            stats = fs.statSync(currPath)

        if(stats.size > 100000) {   // 只处理size为 100kb 以上的文件
            str = v.indexOf('.jpg') === -1 ? `${v}.jpg` : v
            
            let target = path.join(newDir, str) // 目标路径

            // fs.rename(currPath, str, err=>{  // 只会移动到asset同级目录下
            //     console.log(err)
            // })

            fs.rename(currPath, target, err => {  // 可以移动到asset - aaa目录下
                err ? console.log(err) : null 
            })

            // 这里有个坑,折腾了很久
            // 图片处理过后,总是移动到asset同级目录下
            // 后来通过err发现了问题,解决办法就是认真查看err中的path和dest两个路径并修改即可
            // fs.rename(path, dest, callback) 源路径 目标路径 回调函数
        }
    })
})


/**
 *  初衷：有时win10的屏保壁纸非常喜欢，但找到了存放这些壁纸的文件夹后，壁纸不是图片文件
 *        需要手动增加.jpg后缀才能变成正常的图片
 * 
 *        这样就很麻烦了，于是有了这个脚本
 * 
 *        由于很久用Node写脚本，有点生疏
 * 
 */