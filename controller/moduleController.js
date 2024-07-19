const Module = require('../model/moduleModel');

async function createModule(req,res){
    try {
        const newModule = new Module(req.body);
        const result = await newModule.save();
        res.status(200).send({message :"Module created successfully",task : result});
    } catch (error) {
        res.status(500).send(error);
    }
} 
async function getAllModule(req,res){
    try {
        result = await Module.find({},{__v:0});
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);

    }
}
async function updateModule(req,res){

    try {
        const newModule = await Module.findByIdAndUpdate(req.params.id,req.body);
        if (!newModule) {
            res.status(400).send({message : 'Module not Found'});
        }
        res.status(200).send({message : 'Module updated'});
        } catch (error) {
            res.status(500).send(error);
    }
}

async function deleteModule(req,res){
    const id = req.params.id;
    try {
        const newModule = await Module.findByIdAndDelete(id);
        if(!newModule){
            res.status(400).send({message : 'Module not found'});
        }
        res.status(200).send({message : 'Module Deleted',});
    } catch (error) { 
        res.status(500).send(error);
    }
} 

module.exports = {
    createModule,
    getAllModule,
    updateModule,
    deleteModule
}