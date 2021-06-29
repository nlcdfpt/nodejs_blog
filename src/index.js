const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => res.send(`<h1>Nguyen Lam Cong Danh</h1>`))
app.listen(port, () => console.log(`Example express listening http://localhost:${port}`))