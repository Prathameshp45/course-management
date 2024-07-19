const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config;
const mongoDB = require('./config/db');

const userRoutes = require('./routes/userRoutes')
const courseRoutes = require('./routes/courseRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const lectureRoutes = require('./routes/lectureRouter');


const app = express();
port = 5000;

app.use(express.json());
app.use(bodyparser.json());
 
mongoDB.connectDB();
//user
app.use('/api/user',userRoutes);


//course
app.use('/api/course',courseRoutes);

//module
app.use('/api/module',moduleRoutes);

//lectures
app.use('/api/lecture',lectureRoutes);



app.listen(port,() => console.log("Server started at..",port));