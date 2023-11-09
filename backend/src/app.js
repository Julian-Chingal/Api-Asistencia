const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const {PORT} = require('./config/index')

// Settings
app.set("port", PORT)

// Middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

// Routes
app.use("/api", require('./routes'))
app.use("/home", express.static('./src/public'))

// start
app.listen(app.get("port"), () => {
    console.log("👾 server running on port", app.get("port"), '👾')
})