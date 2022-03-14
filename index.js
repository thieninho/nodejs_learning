const express = require('express')
const app = express()
const port = 3000
// route
app.get('/thanh-thien', (req, res) => {
  return res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})