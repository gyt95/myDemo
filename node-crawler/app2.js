const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');

const app = express();

const baseUrl = 'https://cnodejs.org';
let items = [],
    urls = [],
    flag = 0,
    sum = 0,
    startDate = new Date(), 
    endDate = false;

for(let i = 1; i <= 100; i++){
    const tmp = `https://cnodejs.org/?tab=all&page=${i}`
    urls.push(tmp)
}
urls.forEach((item)=>{
    superagent
    .get(item)
    .end((err, sres)=>{
        if(err) { console.error(err);flag++}

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
        console.log('抓取成功数: '+sum)

        if(sum>0){ 
            endDate = new Date();
            console.log('耗时： ' + (endDate-startDate) + 'ms')
        }
    })
})

app.listen(9000)
console.log('listening the port 9000...')
