module.exports = ctx => {
    const fs = require('fs')
    const path = require('path')
    const { mysql: config } = require('../config')
    const https = require('https')

    const DB = require('knex')({
        client: 'mysql',
        connection: {
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.pass,
            database: 'iZhiJiao',
            charset: config.char,
            multipleStatements: true
        }
    })

    var getUrl = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx542ddffc5268f0be&secret=0bf54d6cec5a5055896ed03226190b44&js_code=' + ctx.request.body.code + '&grant_type=authorization_code'

    ctx.state.data = {
        getUrl: getUrl
    }

    https.get(getUrl, function(res) {
        res.on('data', function(data) {
            DB.insert({
                name: ctx.request.body.name || '',
                id: ctx.request.body.id || '',
                region: ctx.request.body.region || '',
                contact: ctx.request.body.contact || '',
                contactType: ctx.request.body.contactType || '',
                openid: JSON.stringify(data) || 'noOpenidReturn'
            }).into('user').then(res => {
                console.log('用户信息插入成功！')
                process.exit(0)
            }, err => {
                throw new Error(err)
            })
        })
    })

    

}