## 简易聊天室

突然心血来潮就去学习WebSocket，以前在校学Java时有接触，但内心较抗拒，觉得很难。。

现在再看，感觉起码入门是没问题的。就先做个简易聊天室，后续再美化。

## 运行

```
npm install 安装依赖

node wsServer.js 运行服务器

打开demo.html，每次打开一个html页面，就相当于一个User。
```

## 说明

> 第一次commit采用的是WebSocket，第三次commit时改用了socket.io框架，大大地减少了代码量

> 好处1：emit()可以直接把对象当做参数发送出去，而不需要先把对象转换为字符串，又再转换为对象
（ 省掉JSON.stringify()和JSON.parse() ）

> 好处2：on()中第一个参数，可以是自定义的内容，不需要额外自定义一个类似type的属性
（ 省掉在对象中新建属性来判断一些状态如enter、leave ）

