const express = require('express');

const port = 5000

const app = express();

app.use(express.json())

app.get('/', (req, res) => { 
    res.send('hola') 
    res.end() 
}) 

app.listen(port,console.log(
  'Server started on port' ));
