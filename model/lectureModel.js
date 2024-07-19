const mongoose = require('mongoose');

const lectureSchema = mongoose.Schema({
    name:{type : String,require: true},
    description: {type: String},
    teacher : {type : String},
    mode :{type : String , enum : ["Online","Offline"]}
})

module.exports = mongoose.model("lecture",lectureSchema);

// {
//     "name":"HTML",
//     "description":"description" ,
//     "teacher" :"Sanket" ,
//     "mode" :"Offline"
// } 