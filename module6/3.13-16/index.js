const {MONGODB_URI, PORT} = require('./utils/config')
const express = require("express")
const middlewares = require('./utils/morgan')
const personsRouter = require('./routes/persons')
const mongoose = require('mongoose')
const error = require('./utils/error')

mongoose.connect(MONGODB_URI)

// Initializers. These blocks should be placed in different files, for example middlewares.js, server.js...
// but let's keep this simple.
const app = express()
app.use(express.json())
app.use(middlewares.logger)
app.use(middlewares.attachCurrentuser)
app.use(error.errorHandler)
app.use("/api/persons",personsRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


