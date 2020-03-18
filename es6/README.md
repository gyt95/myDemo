### 使用nodemon实现代码热更新

如果直接用node xx.js的话，每次更新xx.js代码时，都需要再执行一次node xx.js命令。

于是得找一个办法实现热更新，也没可能要用到webpack才可以吧。。

找到了可以用nodemon

### 步骤

npm install -g nodemon

npm install -s nodemon

#### 自动重启
用nodemon替换node去启动项目的入口文件机会在项目改变成自动重启服务器
nodemon app.js

#### 手动重启
在nodemon运行时，如果需要手动重新启动应用程序，而不是停止并重新启动nodemon，则可以键入rs回车符，并且nodemon将重新启动你的进程。

### nodemon.json配置项
```
{
    "restartable": "rs",   // 设置重启模式 
    "ignore": [      // 设置忽略文件 
        ".git",
        ".svn",
        "node_modules/**/node_modules"
    ],
    "verbose": true,   // 设置日志输出模式，true 详细模式 
    "execMap": {    // 设置运行服务的后缀名与对应的命令 
        "js": "node --harmony"    // 使用 nodemon 代替 node
    },
    "watch": [   // 监听哪些文件的变化，当变化的时候自动重启 
    ],
    "env": {
        "NODE_ENV": "development"
    },
    "ext": "js json"   // 监控指定的后缀文件名
}

```