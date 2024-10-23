const express = require('express');
const app = express();
const dotenv = require('dotenv');

app.get('/home', (req, res)=> {
    res.json({
        message:'OK'
    });
})

app.listen(process.env.PORT, ()=> {
    console.log('Server up an running');
})