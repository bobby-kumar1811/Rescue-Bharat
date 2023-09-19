const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const fs = require('fs')
const path = require('path')

function Router(root) {
    let obj = new Object()

    obj.find = (router) => {
        return require(root + '/' + router)
    }

    return obj
}

const { resolve } = require('path')
const { readdir, stat } = fs.promises

async function* getRoutes(dir, prefix) {
    let route = prefix || '/'

    const entries = await readdir(dir, { withFileTypes: true })

    for (const file of entries) {
        if (file.isDirectory()) {
            // yield* getRoutes(file, route + '/' + file.name)
        } else {
            if (file.name === 'page.ejs') {
                app.get(route, (req, res) => {
                    res.render('')
                })
            } else if (file.name.endsWith('.ejs')) {
            }

            // yield { route, path:  }
        }
    }
}

async function directory(path) {
    app.set('view engine', 'ejs')
    app.set('views', path + '/pages')
    app.set('layout', 'layouts/layout')
    app.use(expressLayouts)
    app.use(express.static(path + '/public'))

    // app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

    // path/page.ejs will be the root web-page of application
    // if (!fs.existsSync(path + '/pages/page.ejs')) {
    //     throw new Error(path + '/page.ejs not found')
    // }

    // app.get('/', (req, res) => {
    //     res.render('page')
    // })

    // find and set routes

    const entries = await readdir(path + '/pages')
    for (const file in entries) {
    }
}

function start(port) {
    app.listen(port)
}

module.exports = { directory, start, Router }
