var express = require('express');
var app = express();
const port = 3002;
var myUsers = ['Tom', 'Nick', 'Harry'];

app.get('/listUsers', (req, res) => {
    res.send(myUsers);
})

app.put('/addUser', (req, res) => {
    myUsers.push(req.query.name);
    res.send(myUsers);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})