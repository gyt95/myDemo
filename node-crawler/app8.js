var page = require('webpage').create(),  // 引入模块，创建实例
      url = 'http://news.163.com';

var system = require('system');

phantom.outputEncoding="gbk";
// page.settings.userAgent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"

page.open(url, function(status){
    console.log(status)

    if(status !== 'success') {
        console.log('failed!')
    }
    else{
        console.log('开始查找...')
        // page.includeJs("http://code.jquery.com/jquery-1.10.1.min.js", 
        // function(){
            setTimeout(function(){
                var flag = 0,result = '';
                result = page.evaluate(function(){
                    var sum = '', // 获取DOM总和
                        text = '',
                        num = 0,
                        list = document.querySelectorAll('.news_article'),  //
                        aImg = document.querySelectorAll('.news_article>.na_pic'),  // a标签的link
                        aText = document.querySelectorAll('.news_title>h3>a') // 新闻标题
                    for(var i = 0; i<list.length; i++){
                        var tmp = aImg[i].getAttribute('href');
                        var tmp2 = aText[i].innerText;
                        sum += tmp + '\n';
                        text += tmp2 + '\n';
                        num++;
                    }
                    // console.log(list.length)
                    return text;
                })
                console.log(555)
                // result = result.replace(/\s/,'')
                console.log(result)
                phantom.exit(0);
            }, 4000)
        // })


        page.onConsoleMessage = function(msg) {
            system.stderr.writeLine('console: ' + msg);
        };

        // setInterval(function(){
            
        //     var result = page.evaluate(function(){
        //         var arr = [];
        //         arr.push(document.querySelector('li.nav_item>a.nav_name').innerText);
        //         return arr;
        //     })
            
        //     console.log('结果:' + result);
            
        //     phantom.exit(0);
        // }, 4000)
        // phantom.exit(0);
    }
})