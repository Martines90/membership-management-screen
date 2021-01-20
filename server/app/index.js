const config = require('./config')
const enableDestroy = require('server-destroy')

process.title = 'server'

const server = require('./server')(config.host, config.port)

enableDestroy(server)

const shutdown = () => {
    server.destroy(() => {
        console.info('Server stopped')
        process.exit(0)
    })
}


process.on('SIGTERM', () => {
    console.info('Caught SIGTERM, exiting...')
    shutdown()
})

process.on('SIGINT', () => {
    console.info('Caught SIGINT, exiting...')
    shutdown()
})
