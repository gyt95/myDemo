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
    const pages = 5; // 爬虫总页数（可自定义）

    let currentPage = 1,  // 当前页码初始化为1，随着递归而增加，直到大于总页数pages
        items = [];  // 空数组，用于存放每组爬虫得到的数据
    
    function test(currentPage,items){
        superagent.get(`https://cnodejs.org/?tab=all&page=${currentPage}`)
        .end((err, sres)=>{
            if(err) {return next(err);}
            
            // sres.text里面是网页的Html内容
            // 通过cheerio.load得到一个实现了jquery接口的变量
            const $ = cheerio.load(sres.text);
            $('#topic_list .topic_title').each((idx, element)=>{
                const $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: baseUrl + $element.attr('href')
                })
            })
            currentPage++;
            if(currentPage<=pages){
                test(currentPage,items)
                console.log(`第${currentPage}页已抓取完毕`)
            }else{
                console.log(`爬虫到第${currentPage}页，爬虫结束`)
                // res.send(last) //可用于在页面中查看数据结构
                res.render('index',{
                    title:'首页 ',
                    content: items
                })
            }
        })
    }
    test(currentPage,items)
})

app.get('/game', (req, res, next)=>{  
    superagent.get('http://a.9game.cn/category/hot/1_0_0_0/')
    .end((err, sres)=>{
        if(err){
            return next(err);
        }

        const $ = cheerio.load(sres.text);
        const items = [];
        $('#ajaxContainer .category-list-item').each((idx, element)=>{
            const $element = $(element);
            
            // console.log($element)
            let game = {
                href: $element.find('.con').attr('href'),
                img: $element.find('.pic img').attr('src'),
                title: $element.find('.name').text(),
                type: $element.find('.type').text(),
                desc: $element.find('.desc').text()
            }
            items.push({
                game: game
            })
            // console.log(items)
        })
        res.render('game',{
            title:'游戏列表',
            content: items
        })
    })
})

app.listen(9000)
console.log('listening the port 9000...')
