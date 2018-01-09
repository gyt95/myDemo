/*
 * @Author: gyt95.kwan 
 * @Date: 2018-01-06 16:51:18 
 * @Last Modified by: gyt95.kwan
 * @Last Modified time: 2018-01-08 16:48:01
 * 
 * 主要为了实现网易数据抓取，之前刚学nodejs爬虫时，发现网易没有id名，不知道怎么抓取
 * 现在了解深了些，决定再次抓取。
 */


const express = require('express');
const resuper = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');

const app = express();
const request = require('request');
const iconv = require('iconv-lite');

const install = require('superagent-charset');
superagent = install(resuper);


const baseUrl = 'http://news.163.com/';
let items = [],
    urls = [],
    flag = 0,
    sum = 0,
    startDate = new Date(), 
    endDate = false;

    // superagent
    // .get('http://temp.163.com/special/00804KVA/cm_yaowen.js?callback=data_callback')
    // .charset('gb2312')
    // .end(()=>{

    // })


    /**
     * request拿过来的时候已经帮你按UTF-8解码了，
     * 你需要request时候设置encoding: null（与设置url同级），
     * 拿回来个buffer，再用iconv-lite解码。
     */
    // request.get({
    //     url : 'http://temp.163.com/special/00804KVA/cm_yaowen.js?callback=data_callback',
    //     encoding : null //让body 直接是buffer
    // }, function (err, response, body) {
    //     //返回的body 直接就是 buffer 了...
    //     var buf =  iconv.decode(body, 'gb2312');
    //     //去掉头部的 data_callback(
    //     var str = buf.replace('data_callback(','');
    //     //去掉尾部的 )
    //     str = str.replace(')','');
    //     var str1 = JSON.parse(str);
    //     str1.forEach(function(s){
    //         console.log('文章标题：'+s.title);
    //         console.log('摘要：'+s.digest);
    //         console.log('文章链接：'+s.docurl);
    //         console.log('内容链接：'+s.commenturl);
    //         console.log('tienum：'+s.tienum);
    //         console.log('tlastid：'+s.tlastid);
    //         console.log('tlink：'+s.tlink);
    //         console.log('标签：'+s.label);
    //         console.log('时间：'+s.time);
    //         console.log('新闻类别：'+s.newstype);
    //         console.log('频道名称：'+s.channelname);
    //         console.log('图片链接：'+s.imgurl);
    //     });
    // });



    // superagent
    // .get('http://www.163.com/rss')
    // .charset('gb2312')  // 网易是gb2312编码，不是UTF-8，所以直接获取会乱码
    // .end((err, sres)=>{
    //     if(err) { console.error(err);flag++}

    //     const $ = cheerio.load(sres.text);
    //     $('#newsList_news .tList ul li').each((idx, el)=>{
    //         const $el = $(el)

    //         items.push({
    //             title: $el.find('a').text()
    //             // href: baseUrl + $el.attr('href')
    //         })
    //         sum++;
    //     })

    //     // fs.writeFileSync('output.json', JSON.stringify(items, null, 2))
    //     console.log(items)
    //     console.log('错误flag数: '+flag)
    //     console.log('抓取成功数: '+sum)

    //     if(sum>0){ 
    //         endDate = new Date();
    //         console.log('耗时： ' + (endDate-startDate) + 'ms')
    //     }
    // })

    superagent
    .get('https://item.taobao.com/item.htm?id=545533644459')
    .charset('gbk')
    .end((err, res)=>{
        var $ = cheerio.load(res.text);

        var $el = $('#J_Title').find('.tb-main-title').text();
        var $el2 = $('#J_StrPrice').find('.tb-rmb-num').text();
        var $el3 = $('#J_RateCounter').text();
        console.log($el)
        console.log($el2)
        console.log($el3) // 由于累计评论是异步获取过来的，所以通过这种办法获取到的是“-”
        console.log(2222)
    })

    

app.listen(9000)
console.log('listening the port 9000...')
