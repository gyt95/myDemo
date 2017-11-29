const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');
const swig = require('swig');
const path = require('path');

const app = express();

//设置swig页面不缓存
swig.setDefaults({
    cache: false
})
app.set('view cache', false);
app.set('views','./views/');
app.set('view engine','html');
app.engine('html', swig.renderFile);

/*
    app.get('/',function(){...})就是指定用于定义路由

    相当于：
    引入router模块 var router = express.Router();
    然后定义路由规则 router.get('/',function(){...})
    最后使用 app.use('/', router)
*/
app.get('/', (req, res, next)=>{
    const baseUrl = 'https://cnodejs.org';

    superagent.get('https://cnodejs.org/?tab=ask')
    .end((err, sres)=>{
        if(err) {return next(err);}

        // sres.text里面是网页的Html内容
        // 通过cheerio.load得到一个实现了jquery接口的变量
        const $ = cheerio.load(sres.text);
        const items = [];
        $('#topic_list .topic_title').each((idx, element)=>{
            const $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: baseUrl + $element.attr('href')
            })
        })
        console.log(items)
        res.render('index',{
            title:'首页 ',
            content: items
        })
    })
}).listen(9000, ()=>{
    console.log('listening the port 9000...')
})