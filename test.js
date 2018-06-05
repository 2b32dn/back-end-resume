const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.raw({type:"*/*"}))

app.get("/test",(req,res)=>{
    res.send("hello")
})

app.listen(4000, ()=> console.log("Listening on port 4000"))
