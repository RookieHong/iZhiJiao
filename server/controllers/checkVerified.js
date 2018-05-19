module.exports = async ctx => {
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

    await DB('user').where({openid: ctx.params.openid}).select('*')
        .then(res => {
            ctx.state.data = res
        }, err => {
            ctx.state.data = err
        })
}