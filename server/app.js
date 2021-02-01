if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express =  require('express')
const app = express()
const port = 3000
const router = require('./routes/index')
const errorHandler = require('./middlewares/errorHandling')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})