const fs = require('fs')
const path = require('path')
const { mysql: config } = require('../config')

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

var add = userId => {
    DB('user').insert({ openid: userId })
}

module.exports = add