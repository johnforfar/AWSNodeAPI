var express = require('express');
var app = express();
const port = 8080;
var myUsers = ['Tom', 'Nick', 'Harry'];

app.get("/", (req, res) => {
    res.write("########################################################\n");
    res.write("Welcome to the AWS Node API!\n");
    res.write("########################################################\n");
    res.write("The following endpoints have been configured:\n");
    res.write("GET /listUsers\n");
    res.write("PUT /addUser?name=John\n");
    res.write("DELETE /deleteUser?start=0&deleteCount=1\n");
    res.write("POST /updateUser?index=0&name=John\n");
    res.write("########################################################\n");
    res.write("Built with Node.js and Express.js\n")
    res.write("Deployed with AWS CodePipeline and AWS Elastic Beanstalk.\n");
    res.write("########################################################\n");
    res.write("Check out johnforfar.com for more portfolio projects.\n");
    res.write("########################################################\n");
    res.end()
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