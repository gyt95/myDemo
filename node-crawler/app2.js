const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');

const app = express();

const baseUrl = 'https://cnodejs.org';
let items = [];
let urls = [];
let flag = 0, sum = 0;
let startDate = new Date(), endDate = false;

for(let i = 1; i <= 100; i++){
    const tmp = `https://cnodejs.org/?tab=all&page=${i}`
    urls.push(tmp)
}
console.log(urls)
urls.forEach((item)=>{
    superagent
    .get(item)
    .end((err, sres)=>{
        if(err) { console.error(err);flag++}

        // sres.text里面是网页的Html内容
        // 通过cheerio.load得到一个实现了jquery接口的变量
        const $ = cheerio.load(sres.text);
        $('#topic_list .topic_title').each((idx, element)=>{
            const $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: baseUrl + $element.attr('href')
            })
            sum++;
        })
        // fs.writeFileSync('output.json', JSON.stringify(items, null, 2))
        console.log(items)
        console.log('错误flag数: '+flag)
        console.log(sum)

        if(sum>0){  //这个指标一直很难定，有时抓到400+数据有时是500+，最后突然想到这种循环是异步的，只要确定他开始时间就好了
            endDate = new Date();
            console.log('耗时： ' + (endDate-startDate) + 'ms')
        }

        // 480条  8错误     1774ms  1.7s
        // 640条  4错误     2230ms  2s
        // 760条  11个错误  6162ms  6s
        // 760条  1个错误   4147ms  4s
        // 1720条 57个错误  7056ms  7s
        // 1800条 55个错误  11917ms 11s
    })
})

app.listen(9000)
console.log('listening the port 9000...')
