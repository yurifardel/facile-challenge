const express = require('express')
const bodyParser = require("body-parser");
const AuthController = require('./controller/auth')

const app = express()

app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(AuthController)

app.listen(8080, () => {
  console.log('express is running on port 8080')
})