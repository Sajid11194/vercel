const express = require('express')
const app = express()

app.listen(80,()=>{
    console.log("Started")
});
app.get("/",(req,res)=>{
    res.send("Hi")
    console.log("HI")
})