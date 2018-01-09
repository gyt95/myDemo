const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
const eventproxy = require('eventproxy');  //流程控制
const ep = eventproxy();
const async = require('async');

const app = express();

const baseUrl = 'https://cnodejs.org';
let items = [],
    urls = [],
    flag = 0,
    sum = 0,
    startDate = new Date(), 
    endDate = false,
    viewsTotal = [],
    times = 0;

// 连接数据库
const mysql = require('mysql');
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 't1'
});
db.connect();

// 获取所有要抓取的网页链接
for(let i = 1; i <= 5; i++){
    const tmp = `https://cnodejs.org/?tab=all&page=${i}`;
    urls.push(tmp);
}

ep.after('xxx.html', 1, function(eps){ 
    // ep.after首个参数只用于对应ep.emit的首个参数
    // 所有链接爬取完毕后调用
    console.log('ep.after() 开始..');
    let currentCount = 0, 
        num =- 4,
        startTime = 0,
        endTime = 0,
        fetchStart = 0,
        time = 0,
        errFlag = 0;
    
    const fetchUrl = function(myurl, callback){ //利用callback函数返回结果，在结果中取出数组
        // console.log(myurl.href)
        startTime = new Date().getTime();
        
        fetchStart = new Date().getTime();
        currentCount++;
        num+=1;
        console.log('现在并发数是：',currentCount,'正在抓取的是：',myurl.href,'num为：',num);
        
        superagent
        .get(myurl.href)
        .end((err, sres)=>{
            if(err) { console.error(err);errFlag++}

            time = new Date().getTime() - fetchStart;
            console.log('抓取 ' + myurl.href + ' 成功', '，耗时' + time + 'ms');
            currentCount--;

            const $ = cheerio.load(sres.text);
            viewsTotal.push( $('#content').find('.changes span').eq(2).text().replace(/[\s\n]/g,'') );

            callback(null, viewsTotal);
        })
        
    }

    async.mapLimit(items, 5, function(myurl, callback){
        fetchUrl(myurl, callback);
    },function(err, result){
        // console.log(viewsTotal) //存放从各个详情页中，抓取到的浏览量
        endTime = new Date().getTime() - startTime;
        console.log('抓取完毕，一共抓取了--->'+items.length+'条数据')
        console.log('一共耗时：' + endTime + 'ms')
        console.log('出错数：' + errFlag)
        console.log('end....')
        return false;
    })
})

urls.forEach((item)=>{
    superagent
    .get(item)
    .end((err, sres)=>{
        if(err) { console.error(err);flag++}

        const $ = cheerio.load(sres.text);

        $('#topic_list .topic_title').each((idx,element)=>{
            const $element = $(element);
            let obj = {
                title: $element.attr('title'),
                href: baseUrl + $element.attr('href')
            }
            items.push(obj)
            sum++;
        })
        // fs.writeFileSync('output.json', JSON.stringify(items, null, 2))
        console.log(items.length)
        // console.log('错误flag数: '+flag)
        console.log('抓取成功数: '+sum)

        if(sum>0){ 
            endDate = new Date();
            console.log('耗时： ' + (endDate-startDate) + 'ms')
            times++;
            if(times===5){
                console.log('抓取结束')
                console.log(items.length)
                for(var i=0; i<items.length; i++){
                    console.log(`第${i}条:${items[i].title}`)
                    db.query('insert into cnodejs set ?', items[i], function(err, result){

                        if(err) throw err;
                        if(!!result){
                            console.log('插入成功')
                        }else{
                            console.log(i)
                            console.log('插入失败')
                        }
                    })
                }
                
                // console.log('......')
                // return;
            }
        }

        //传递baseUrl+items.href
        // ep.emit('xxx.html', 'get successful') //检测emit事件，发生指定次数后调用ep.after
    })
})

app.listen(9000)
console.log('listening the port 9000...')


/**
 * async：

    作用：Async是一个流程控制工具包，提供了直接而强大的异步功能，在这里作为处理并发来调用。

    用法：这里需要用到的是：async.mapLimit(arr, limit, iterator, callback) 

    mapLimit可以同时发起多个异步操作，然后一起等待callback的返回，返回一个就再发起下一个。 

    arr是一个数组，limit并发数，将arr中的每一项依次拿给iterator去执行，执行结果传给最后的callback。 
 */


 /**
  * eventproxy：

    作用：eventproxy 起到了计数器的作用，它来帮你管理到底异步操作是否完成，
        完成之后，它会自动调用你提供的处理函数，并将抓取到的数据当参数传过来。

    例如我首先抓取到电影天堂首页侧栏的链接，才可以接着抓取链接里面的内容。
  */