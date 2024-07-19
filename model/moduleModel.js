const mongoose = require('mongoose');

const moduleSchema = mongoose.Schema({
    name:{type : String,require: true},
    description: {type: String},
    subject : {type : String},
    lectures:[
        {
            index : {type : Number}, 
            lectureId : {type: String}
        }
    ]
})

module.exports = mongoose.model("module",moduleSchema);

// {
//     "name":"HTML Part-A",
//     "description":"description",
//     "subject":"HTML"
// }