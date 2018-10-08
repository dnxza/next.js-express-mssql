const express = require('express')
const next = require('next')

const configServer = require("./config").configServer;
const slog = configServer.console.express;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        if (slog) {
            server.use(function (req, res, next) {
                console.log("[EXPRESS][" + req.method + "]", req.path);
                next()
            })
        }

        // router api ไฟล์ api/index.js
        var apis = require('./api/index');
        server.use('/api', apis)

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(configServer.port, (err) => {
            if (err) throw err
            console.log(`> Ready on Port ${configServer.port}`)
        })
    })