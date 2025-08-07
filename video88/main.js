const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about')
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact')
})
app.get('/blog', (req, res) => {
  res.send('Hello Blog!')
})
app.get('/blog/:slug', (req, res) => {
  console.log(req.params)
  res.send(`Hello ${req.params.slug}`)
})
// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Hello intro-to-js')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Hello intro-to-python')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
