// MODULOS
const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const routes = require('./routes/router.js')

const server = express();

// CONFIGURAÇÕES

// BODY-PARSER
server.use(express.urlencoded({
    extended: true
}))

// PUBLIC FOLDER
server.use(express.static(path.resolve(__dirname, '..', 'public')))

// VIEW ENGINE
server.set('view engine', 'html')

// NUNJUCKS

nunjucks.configure(path.resolve(__dirname, 'views'), {
    express: server,
    noCache: true,
})

// MIDDLEWARE

// server.use('/', function(req, res, next) {
//     req.locals.name = "Domingos"
//     next()
// })

// ROTAS
server.use('/', routes)





// OUTROS
server.listen(3000)