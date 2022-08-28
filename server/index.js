const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const Feedback = require('./models/feedback')

// CONNECT TO THE DATABASE
mongoose.connect('mongodb://localhost:27017/feedBacks', () => {
    console.log('Connected to the database')
})

// APP
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// ROUTES

// ROUTE 1: get /api/all/
app.get('/api/all' , async (req, res) => {
    try {
        const list = await Feedback.find();
        res.send({ success: true,res: list })
    } catch (error) {
        res.status(500).send({success: false, message: "Error Occured" })
    }
})
// ROUTE 2 : post /api/createFeedBack
app.post('/api/createFeedBack',async (req, res) => {
    try {
        const feedback = await Feedback.create({
            rating: req.body.rating,
            comment: req.body.comment
        })
        res.send({ success: true,message: "Succesfully created the app", res: feedback })
    } catch (error) {
        res.status(500).send({success: false, message: "Error Occured"})
    }
    
})

// ROUTE 3: Delete /api/deleteFeedBack
app.delete('/api/deleteFeedBack/:id', async(req, res) => {
    try {
        const find = await Feedback.findById(req.params.id)
        if (!find) {
            return res.send({ success: false, message: "Not Found" })
        }
        event = await Events.findByIdAndDelete(req.params.id)
        success = true
        return res.send({ success: true, res: event })
    } catch (error) {
        res.status(500).send({ success: false, message: "Error Occured" })
    }
   
})

app.listen( 5000 , ()=> {
    console.log('Listening on port')
})