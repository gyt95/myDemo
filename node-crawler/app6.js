var page =require('webpage').create();
var address='http://product.pconline.com.cn/server/';
var fs = require('fs');
var mypath = 'version/server/server.txt';
var count = 2;
var pageSize=0;
  phantom.outputEncoding="gbk";
  page.settings.userAgent = "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko";


function loadController(status){
  loadComputerList(address);
}

function loadComputerList(url){
  console.log('loading '+url);

  page.onLoadFinished = function loadListsucc(status){
    console.log("loadlistSucc ["+url+"] =======================Status:"+status);
  };

  page.open(url,function(status){
    setTimeout(function(){
      console.log(status);
      var content='';
      content = page.evaluate(function(){
        var cont='';
        var listComputer = document.querySelectorAll('div.item-title>h3>a');
        var listPrice =document.querySelectorAll('div.price');
        for(var j=0;j<listComputer.length;j++){
            var computer = listComputer[j].innerText;
            var price = listPrice[j].innerText;
            var url = listComputer[j];
            cont += computer+'\t\t价格:'+price+','+url+'\r\n';
        }
        return cont;
      });
      console.log(content);
      console.log('========== write to file !============');
      try{
        fs.write(mypath, content, 'a');
      }catch(e){
        console.log(e);
      }
      console.log('========== begin loading next page!============');
      var nextUrl = page.evaluate(function(){
            var url = '';
            var next =  document.querySelectorAll('div.pager a[class=page-next]');
            var cont = '';
            url = next[0];
            cont += url;
            return cont;
                  });
          console.log(nextUrl);

      if(count <= pageSize){
        console.log(nextUrl);
        count++;
        console.log(count);
        loadComputerList(nextUrl);
      }else{
          console.log(count);
      phantom.exit();
      }
      }, 100);
  });
}

page.open(address,function(status){
  // page.onLoadFinished = loadController;
  page.render('computer.jpeg');
  pageSize = page.evaluate(function(){
    var cont='';
    var size =document.querySelector('div.pager>em>i').innerText;
    cont += size;
    return cont;
  });
  console.log(pageSize);
  loadController(status);
});