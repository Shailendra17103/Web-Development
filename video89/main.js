const express = require('express')
const birds = require('./routes/blog')



const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', birds)


app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World3!')
})

app.post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})
app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})
app.delete('/', (req, res) => {
    console.log("Hey its a delete request")
    res.send('Hello World delete!')
})

app.get("/index",(req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html',{root:__dirname})
})

app.get("/api",(req, res) => {
    res.json({a:1,b:2,c:3,d:4,name:["shali","harsh"]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
