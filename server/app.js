const Koa = require('koa')
const app = new Koa()
const debug = require('debug')('koa-weapp-demo')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
//const https = require('https')

// 使用响应处理中间件
app.use(response)

// 解析请求体
app.use(bodyParser())

/*https.get('https://www.baidu.com', function(res) {
    console.log(res)
    res.on('data', function(data) {
        console.log(data)
    })
})*/

// 引入路由分发
const router = require('./routes')
app.use(router.routes())

// 启动程序，监听端口
app.listen(config.port, () => debug(`listening on port ${config.port}`))
