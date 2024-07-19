const Course = require('../model/courseModel');
const Module = require('../model/moduleModel');

async function createCourse(req,res){
    try {
        const newCourse = new Course(req.body);
        const result = await newCourse.save();
        res.status(200).send({message :"Course created successfully",task : result});
    } catch (error) {
        res.status(500).send(error);
    }
} 
async function getAllCourse(req,res){
    try {
        
        result = await Course.find({},{__v:0});
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);

    }
}
async function updateCourse(req,res){

    try {
        const course = await Course.findByIdAndUpdate(req.params.id,req.body);
        if (!course) {
            res.status(400).send({message : 'Course not Found'});
        }
        res.status(200).send({message : 'Course updated'});
        } catch (error) {
            res.status(500).send(error);
    }
}

async function deleteCourse(req,res){
    const courseId = req.params.id;
    try {
        const course = await Course.findByIdAndDelete(courseId);
        if(!course){
            res.status(400).send({message : 'Course not found'});
        }
        res.status(200).send({message : 'Course Deleted',});
    } catch (error) { 
        res.status(500).send(error);
    }
} 

async function assignModule(req,res){
    try {
        const courseid = req.params.id;
        const course = await Course.findOne({ _id : courseid });
        if (!course) {
            res.status(404).send({ message: "Unknown courseid" });
        }else{
            
            const module1 = await Module.findById(req.body.moduleId);

            if(!module1){
                res.status(404).send({ message: "Unknown moduleId" });
            }else{
                course.modules.push(req.body.moduleId);
                
                const updateCourse = await course.save();
                if (updateCourse){
                    res.status(200).send(updateCourse);
                }
            }
        } 
          
    } catch (error) {
        res.status(500).send(error);  
    }
}

async function getCourseModule(req,res){
    try {
        const courseId = req.params.id;

        const course = await Course.findOne({_id : courseId},{_id : 0, course : 1});
        
        if(course){
            res.status(200).send(course);
        }else{
            res.status(404).send({ message: "Unknown userId" });
        }
    } catch (error) {
        res.status(500).send(error); 
    }
}

module.exports = {
    createCourse,
    getAllCourse,
    updateCourse,
    deleteCourse,
    assignModule,
    getCourseModule
}