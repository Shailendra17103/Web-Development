const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs=require("fs")

app.use(express.static("public"))

// ...

app.use('/blog', blog)

//Middleware 1-Logger for an application
app.use((req,res,next)=>{
    console.log(req.headers)
    req.shali="I am shali";
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by middleware1")
    next()
})


//Middleware 2
app.use((req,res,next)=>{
    console.log('LOGGED2')
        req.shali="I am Phoenix";

    next()
})

app.get('/', (req, res) => {
  res.send('Hello World1!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!'+req.shali)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
