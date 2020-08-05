const express = require('express');
const app = express();


//routes
app.get('/',(req,res)=>{
    res.send('Hello from Node !');
})

app.listen(5000,()=>{
    console.log('server started');
})