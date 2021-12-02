const express = require('express')
const bodyParser = require("body-parser");
const AuthController = require('./controller/auth')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(AuthController)

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.listen(PORT, () => {
  console.log(`express is running on port ${PORT}`)
})