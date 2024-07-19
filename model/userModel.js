const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
 
const userSchema = mongoose.Schema({
    name : {type : String,required : true},
    mobile : {type : Number,required : true, unique : true},
    role : {type : String, enum : ["STUDENT","TEACHER"],required : true},
    password : {type : String, required : true},
    course : [{type : String, autoIncrement : true}]
});

userSchema.pre('save',async function(next){
    const user = this;
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
});

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

module.exports = mongoose.model("User",userSchema); 