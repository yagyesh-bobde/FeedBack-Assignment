const mongoose = require('mongoose')



const Feedback = new mongoose.Schema({
    date: {type: Date , default: Date.now},
    rating : {type: Number, required: true},
    comment: {type: String , required : true}
})


module.exports = mongoose.model('FeedBack', Feedback);