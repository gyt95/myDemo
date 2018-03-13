const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: '163',
    port: '465',
    secureConnection: true,     //使用SSL
    auth: {
        user: 'gyt95@163.com',
        pass: '123123'        // 密码不是qq密码，是你设置的smtp密码
    }
})

const mailOptions = {
    from: 'gyt95@163.com',
    to: 'gyt95@163.com',
    subject: 'Hello sir',   //标题
    text: 'Hello.',         //标题
    html: '<p>哈哈哈哈</p>'  //html内容
}

transporter.sendMail(mailOptions, function(error, info){
    if(error) return console.log(error)
    console.log('Message sent: ' + info.response)
})
