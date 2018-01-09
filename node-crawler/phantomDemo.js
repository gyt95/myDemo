var page = require('webpage').create(),
    blogUrl = 'http://www.cnblogs.com/front-Thinking',
    tbUrl = 'https://item.taobao.com/item.htm?id=545533644459';

phantom.outputEncoding="gbk";
page.open(blogUrl, function(status) {
    if ( status === "success" ) {
        console.log(page.title); 
        console.log('抓取完毕')
        getTaoBaoData()
    } else {
        console.log("Page failed to load."); 
    }
    // phantom.exit(); // 这里不能执行exit()，否则无法调用test()
});

function getTaoBaoData(){
    console.log('正在抓取...')
    page.open(tbUrl, function(status){
        console.log(status)
        if(status !== 'success') {
            console.log('failed!')
        }
        else{
            setTimeout(function(){
                const result = page.evaluate(function(){
                    return document.getElementById('J_RateCounter').innerText
                })
                console.log('该商品累计评论:' + result + '条');
                // page.render('taobao.png');  // 截屏
                phantom.exit();
            }, 3000)
        }
    })
}
