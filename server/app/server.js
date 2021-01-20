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
    bodyParser.urlencoded({extended: true}), // Parse application/x-www-form-urlencoded
    bodyParser.json() // Parse application/json
  )

  /**
   * Az osszes todo lekerdezese
   */
  router.get('/api/todos', function (req, res) {
    let todos = []
    res.status(200).json(todos)
  })

  /**
   * Todo lekerdezese id alapjan
   */
  router.get('/api/todos/:todoId', function (req, res) {
    let todo = {}
    res.status(200).json(todo)
  })

  /**
   * Todo letrehozasa
   */
  router.post('/api/todos/:todoId', function (req, res) {
    let todo = {}
    res.status(201).json(todo)
  })

  /**
   * Todo modositasa
   */
  router.patch('/api/todos/:todoId', function (req, res) {
    let todo = {}
    res.status(200).json(todo)
  })

  /**
   * Todo torlese
   */
  router.delete('/api/todos/:todoId', function (req, res) {
    let todo = {}
    res.status(202).json(todo)
  })

  // History fallback api
  router.use(history())
  // Kliens kod bundle betoltese, ha van
  router.use('/', express.static(path.join(__dirname, '../../client/dist'))) // History fallback utan kell megadni

  return app.listen(port, host, () => {
    console.info(`IdomSoft test web server started on ${host}:${port}`)
  })
}
