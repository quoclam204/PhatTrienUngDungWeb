'use strict'

const express = require('express')

const app = express();

const port = process.env.PORT || 9000

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] nhận GET request tại ${req.url}`)

    next();
});

app.get('/', (req, res) => {
    const name = req.query.name;
    res.send(`Web server chào bạn ${name}`);
});




// khoi dong web server
app.listen(port, () => {

    console.log(`server dang chay tren cong ${port}`);

});