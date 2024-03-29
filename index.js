require('dotenv').config()
const connecttomongo = require('./db');
var cors = require('cors')

const express = require('express')
connecttomongo();


const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})