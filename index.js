const express = require('express')
const app = express()
port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

const browserSync = require('browser-sync').create()
browserSync.init({
  server: "./",
  files: ["./*.html", "./styles/*/.css", "./js/*.js"]
})