## Nodejs写的简单爬虫

### 前言

> 第一次听说爬虫是伴随着Python的，当时的我觉得爬虫是件很神秘莫测很高深的事。会Python的人都好6啊~
> 之后在前端实习时听说了后台同事遇到了反爬虫，更令我对爬虫这个东西愈发感兴趣。
> 再后来是学vue写个人项目时，原本想自己写个后台数据库，然后前端来获取动态数据的，但无奈不会Python啊，我那时以为要爬虫是Python独有的技术。。。
> 之后无意中看到个github项目，原来Nodejs就能写爬虫了，nice~一定要找机会学习下，写个爬虫出来。
> 后来也有大概看过一些nodejs写的爬虫小项目，发现其实就是访问url后用类似jQuery之类的库操作DOM，获取网页中对应DOM的文本内容，再将其导出。才真正知道爬虫是怎么一回事。（当时想过爬某知名IT招聘网里部分岗位信息的，不知道怎么的，没进行下去）

### 用到的技术

[express](https://github.com/expressjs/express): 一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
[superagent](https://github.com/visionmedia/superagent): Nodejs里一个轻量的、渐进式的Ajax api，可读性好、学习曲线低，内部依赖nodejs原生的请求api。**用于发送GET POST等请求的http模块**
[cheerio](https://github.com/cheeriojs/cheerio): 为服务器专门设计的快速、灵活、实施的jQuery核心实现。**用法和jQuery一样，用于操作DOM并抓取页面中所需的数据**

### 运行

```
npm install  // 安装依赖

npm start  // 开启本地服务器localhost:9000

```

### 需求

- [x] 单页爬虫 -- 完成
- [ ] 多页爬虫 -- 未完成
- [ ] 存入数据库 -- 未完成
- [ ] 图片爬虫 -- 未完成