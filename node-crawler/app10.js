const request = require('request')
const cheerio = require('cheerio')
const mysql = require('mysql')
// 创建数据库连接
var db = mysql.createConnection({
    host:     'localhost',
    user:     'root',
    password: '123456',
    database: 'spider_test'
  });
  db.connect();  //连接

  function show(item){
    request('http://www.1905.com/vod/list/n_1_t_1/o1p'+item+'.html',function(err,res){  
        if(err){  
            console.log('请求出错');  
        }else{  
            var $ = cheerio.load(res.body, {decodeEntities: false});
            $('.search-list>div').each(function(){
                var newsTitle = $(this).find('p').text();
                var news1Title = $(this).find('h3').text();
                var code = $(this).find('i').text(); 
                var newsTime= "";
                var newsUrl= $(this).find('a').attr('href');
  
                var addSql = "insert into blog(title,time,href,title2,codeNum) values (?,?,?,?,?)"; 
                var addParmas = [newsTitle, newsTime,newsUrl,news1Title,code];
                db.query(addSql,addParmas,function(err,data){  
                  if(err){  
                      console.log(err)
                      console.log("数据库连接错误");  
                  }else{
                    item++; 
                    show(item)
                  }
                })  
            }); 
        }  
    });
  }
  
  show(1)