require('dotenv').config()

const cors = require('cors')
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const helmet = require('helmet')

// Express Config
const app = express()

// Server Config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '10kb' }))
app.use(helmet())

// Cors Controls
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'POST, GET'
    )
    next()
})
app.use(cors())

// Routes Definitions
const webhookRoute = require('./routes/webhookRoute')
webhookRoute(app)


// Server Port Controls
const port = process.env.PORT || '9009'
app.set('port', port)
const server = http.createServer(app)
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

