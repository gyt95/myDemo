## 前言

学Python时无意中看到一个Python小练习，就是用Python实现邮件的发送和接收。Nodejs应该也能实现才对啊，于是就有了这个demo。

## 用到的技术

[Nodemailer](https://github.com/nodemailer/nodemailer)：Nodejs的一个第三方依赖模块

### 模块特点

```
    使用Unicode编码
    支持Windows系统，不需要安装依赖
    支持纯文本和HTML格式
    支持发送附件(包括大型附件)
    在HTML中嵌入图片
    支持SSL/STARTTLS安全协议
    不同的传输方法，可以使用内置也可以使用外部插件的形式
    提供自定义插件支持(比如增加DKIM签名，使用markdown代替HTML等等)
    支持XOAUTH2登录验证(以及关于更新的令牌反馈)
```

## 功能需求

成功发送邮件

## other

> 由于QQ邮箱开启pop3/smtp需要手机验证，但绑定的是旧手机，所以后续再试

## 参考
> https://www.cnblogs.com/pingfan1990/p/4864822.html

> https://segmentfault.com/a/1190000007111377

> http://blog.csdn.net/zzwwjjdj1/article/details/51878392

> https://cnodejs.org/topic/572021b2fa48138c41110e4f
