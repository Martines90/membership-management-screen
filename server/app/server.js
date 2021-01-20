const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const history = require('connect-history-api-fallback')

module.exports = (host, port) => {
    const app = express()

    const router = new express.Router()
    app.use('/', router)

    // Router config
    router.use(
        bodyParser.urlencoded({ extended: true }),
        bodyParser.json()
    )

    router.get('/api/todos', function (req, res) {
        let todos = []
        res.status(200).json(todos)
    })


    router.get('/api/todos/:todoId', function (req, res) {
        let todo = {}
        res.status(200).json(todo)
    })

    router.post('/api/todos/:todoId', function (req, res) {
        let todo = {}
        res.status(201).json(todo)
    })


    router.patch('/api/todos/:todoId', function (req, res) {
        let todo = {}
        res.status(200).json(todo)
    })

    router.delete('/api/todos/:todoId', function (req, res) {
        let todo = {}
        res.status(202).json(todo)
    })

    router.use(history())
    router.use('/', express.static(path.join(__dirname, '../../client/dist')))

    return app.listen(port, host, () => {
        console.info(`server started on ${host}:${port}`)
    })
}
