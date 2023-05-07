var express = require('express');
var app = express();
const port = 8080;
var myUsers = ['Tom', 'Nick', 'Harry'];

app.get("/", (req, res) => {
    res.write("Welcome to the AWS Node API!");
    res.write("############################");
    res.write("GET /listUsers");
    res.write("PUT /addUser?name=John");
    res.write("DELETE /deleteUser?start=0&deleteCount=1");
    res.write("POST /updateUser?index=0&name=John");
    res.write("############################");
    res.write("Built with Node.js and Express.js, deployed with AWS CodePipeline and AWS Elastic Beanstalk.");
    res.write("############################");
    res.write("Check out johnforfar.com for more portfolio projects.");
})

app.get('/listUsers', (req, res) => {
    res.send(myUsers);
})

app.put('/addUser', (req, res) => {
    myUsers.push(req.query.name);
    res.send(myUsers);
})

app.delete('/deleteUser', (req, res) => {
    myUsers.splice(req.query.start, req.query.deleteCount);
    res.send(myUsers);
})

app.post('/updateUser', (req, res) => {
    myUsers[req.query.index] = req.query.name;
    res.send(myUsers);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})