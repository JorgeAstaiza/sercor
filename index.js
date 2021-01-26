const { urlencoded, json } = require('express');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(3000, () =>{
    console.log('serve on');
});

app.use(require('./routes/index'))

app.use(express.static(path.join(__dirname, 'public')));