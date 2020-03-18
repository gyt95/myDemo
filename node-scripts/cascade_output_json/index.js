const fs = require('fs')
const path = require('path')

var stream = fs.createReadStream('./cascader_data.json');
var data = "";
var options = [];
stream.on('data',function(chrunk){//将数据分为一块一块的传递
    // console.log(chrunk);
    // console.log(chrunk.toString());
    data += chrunk;
});
stream.on('end',function(){
    // console.log(data);
    let last_data = JSON.parse(data)
    console.log(typeof(data), typeof(last_data))

    console.time();
    for(let i in last_data){
        options.push(convert(last_data[i]))
    }
    console.timeEnd();

    // console.log(options)
    console.log('finished!!!!');
    fs.writeFileSync(path.resolve(__dirname, 'address.json'), JSON.stringify(options))
});

function convert(d){
    // console.log(d)
    function toBe(d){
        // 先让他循环到最底，找到结束条件
        // console.log(d, d.children)
        if(d.children != undefined){
            // console.log(d.label, d.children)
            let obj = {
                label: d.label,
                value: d.value,
                children: []
            }
            for(let i in d.children){
                obj.children.push(toBe(d.children[i]))
            }
            return obj
        }else{
            // console.log('end')
            return{
                label: d,
                value: d
            }
        }
    }
    return toBe(d);
}

/**
 * 记录
 * 
 * 做人员管理项目时，要三层级联地址，网上找来了全国的省市区级级联数据，但是数据结构不是我需想要的。
 * 
 * 于是折腾了很久写出了递归函数来生成新数据。
 * 
 * 但是不可能每次进入页面都生成一次，决定生成json文件到本地目录。
 * 
 * 平时做得多的是数组转换为json，但问题是如何导出成json文件
 * 
 * 而在vue项目里引入fs模块发现会说Can't not find module，好吧，我想起来我有个myDemo的项目，专门就是放一堆nodejs脚本的。
 * 
 * 所以我选择在myDemo这里写
 * 
 * 如何读入json文件？
 * 
 * 用readFileSync()发现不行，尝试用stream流将数据分块的形式写入。这让我想起小程序蓝牙打印时，就是分块输出打印数据的
 * 
 * 但是导出依然是空数组，想来想去，被自己蠢哭了，stream.on()是异步的，所以会先执行了我后面写的逻辑并导出，再执行回调，得到data，所以是空数组
 * 
 * 改为在回调中执行时，发现无法正常导出，遍历的对象属性也全都是递增的索引，而不是省市区的行政区域号码。。
 * 
 * 为什么呢？
 * 
 * 我尝试查找澳门行政区的区域号码，竟然返回undefined。
 * 
 * 推断是遍历属性出现问题，为什么遍历不到？只有一种可能，就是读入的格式不对。
 * 
 * data和data.toString()都不对，那就是说stream读入的data是json字符串类型(毕竟是以data += 字符串实现读入)，而我们需要的是json对象，所以用JSON.parse()进行转换就可以了
 */


/** 三层级联
 * [
 *    {
 *       label: '',
 *       value: '',
 *       children: [
 *          {
 *              label: '',
 *              value: '',
 *              children: [
 *                  {
 *                      label: '',
 *                      value: ''
 *                  }
 *              ]  
 *          }
 *       ]
 *     }
 * ]
*/