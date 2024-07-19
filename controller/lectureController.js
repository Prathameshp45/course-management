const Lecture = require('../model/lectureModel');

async function createLecture(req,res){
    try {
        const newLecture = new Lecture(req.body);
        const result = await newLecture.save();
        res.status(200).send({message :"Lecture created successfully",task : result});
    } catch (error) {
        res.status(500).send(error);
    }
} 
async function getAllLecture(req,res){
    try {
        result = await Lecture.find({},{__v:0});
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);

    }
}
async function updateLecture(req,res){

    try {
        const newLecture = await Lecture.findByIdAndUpdate(req.params.id,req.body);
        if (!newLecture) {
            res.status(400).send({message : 'Lecture not Found'});
        }
        res.status(200).send({message : 'Lecture updated'});
        } catch (error) {
            res.status(500).send(error);
    }
}

async function deleteLecture(req,res){
    const id = req.params.id;
    try {
        const newLecture = await Lecture.findByIdAndDelete(id);
        if(!newLecture){
            res.status(400).send({message : 'Lecture not found'});
        }
        res.status(200).send({message : 'Lecture Deleted',});
    } catch (error) { 
        res.status(500).send(error);
    }
} 

module.exports = {
    createLecture,
    getAllLecture,
    updateLecture,
    deleteLecture
}