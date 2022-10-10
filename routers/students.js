const express = require('express')
const router = new express.Router()
const Student = require('../models/students')


// Create a new Student
/*app.post('/students', (req, res)=>{
 const users = new Student(req.body)
 users.save().then(()=>{
     res.status(201).send(users)
 }).catch((e)=>{
     res.status(404).send(e)
 })
})*/


// using async and await 
router.post('/students', async(req, res)=>{
    try{
        const users = new Student(req.body)
        const createUser = await users.save()
        res.status(201).send(createUser)
    }catch(e){
        res.status(404).send(e)
    }
   })

// Get All Information of Students
router.get('/students', async(req, res)=>{
    try{
        const AllStudentData = await Student.find()
        res.status(201).send(AllStudentData)
    }catch(e){
        res.status(404).send(e)
    }
   })

// Get Student data by id 
router.get('/students/:id', async(req, res)=>{
    try{
        const _id = req.params.id
        const studentById = await Student.findById(_id)
        if(!studentById){
            res.status(404).send()
        }else{
            res.send(studentById)
        }
    }catch(e){
        res.status(500).send(e)
    }
   })  

router.delete('/students/:id', async(req, res)=>{
    try{
        const _id = req.params.id
        const studentDeleteById = await Student.findByIdAndDelete(_id)
        if(!req.params.id){
            res.status(400).send()
        }
            res.send(studentDeleteById)
    }catch(e){
        res.status(500).send(e)
    }
}) 
   
// update the student by it id
router.patch('/students/:id', async(req, res)=>{
    try{
        const _id = req.params.id
        const UpdateStudentById = await Student.findByIdAndUpdate(_id, req.body,{new:true})
        res.send(UpdateStudentById)
    }catch(e){
        res.status(500).send(e)
    }
}) 


module.exports = router