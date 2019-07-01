const express = require('express')
const userRouter = require('./routers/user')
const propRouter = require('./routers/property')
const managerRouter = require('./routers/manager')
require('./db/mongoose')

const app = express()

const port = process.env.Port || 3000

app.use(express.json())
app.use(userRouter)
app.use(propRouter)
app.use(managerRouter)


app.listen(port ,()=> {
    console.log('Server running on port' + port)
})