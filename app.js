const express = require('express')
const db = require('./db/conn')
var bodyParser = require('body-parser')
const StudentRouter = require('./routers/students')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a new Student
/*app.post('/students', (req, res)=>{
 const users = new Student(req.body)
 users.save().then(()=>{
     res.status(201).send(users)
 }).catch((e)=>{
     res.status(404).send(e)
 })
})*/

app.use(StudentRouter)
   



app.listen(4000, function(){
    console.log('port is connected on 4000')
})