'use strict';

// Build: docker build -t pieterdonkers/testapp .    
// Run: docker run -p 49160:8080 -d pieterdonkers/testapp
// Kill: docker kill <docker id>
// Enter: docker exec -it <docker id> /bin/bash   


const express = require('express');
const db = require('quick.db');
var bodyParser = require('body-parser')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.get('/persons', (req, res) => {
    res.send(db.all());
});

app.post('/persons', (req, res) => {
    console.log(req.body);
    db.set(req.body.username,{
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "userName":req.body.username,
        "dateOfBirth":req.body.dateOfBirth,
        "lastTimeOnline":req.body.lastTimeOnline
    })
    // res.send(db.get(req.body.username));
    // res.status(204);
    
    res.send("success");
});

app.get('/persons/:username', (req, res) => {
    var userName = req.params.username;
    res.send(db.get(userName));
});

app.delete('/persons/:username', (req, res) => {
    var username = req.params.username;
    db.delete(username);
    res.send("gelukt");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


var person1 = {
    "firstName": "first1",
    "lastName": "last1",
    "username": "person1",
    "dateOfBirth": "2019-02-13",
    "lastTimeOnline": "2019-02-13T11:57:45.862Z"
}

var person2 = {
    "firstName": "first2",
    "lastName": "last2",
    "username": "person2",
    "dateOfBirth": "2019-02-13",
    "lastTimeOnline": "2019-02-13T11:57:45.862Z"
}
var person3 = {
    "firstName": "first3",
    "lastName": "last3",
    "username": "person3",
    "dateOfBirth": "2019-02-13",
    "lastTimeOnline": "2019-02-13T11:57:45.862Z"
}
var person4 = {
    "firstName": "first4",
    "lastName": "last4",
    "username": "person4",
    "dateOfBirth": "2019-02-13",
    "lastTimeOnline": "2019-02-13T11:57:45.862Z"
}
var person5 = {
    "firstName": "first5",
    "lastName": "last5",
    "username": "person5",
    "dateOfBirth": "2019-02-13",
    "lastTimeOnline": "2019-02-13T11:57:45.862Z"
}

var allPersons = {
    items:[
        person1,person2,person3,person4,person5
    ]
};