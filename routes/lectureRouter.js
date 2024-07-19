const express = require('express');
const lectureController = require('../controller/lectureController')
const lectureRoutes = express.Router();

lectureRoutes.post('/',lectureController.createLecture);
lectureRoutes.get('/',lectureController.getAllLecture);
lectureRoutes.put('/:id',lectureController.updateLecture);
lectureRoutes.delete('/:id',lectureController.deleteLecture);

module.exports = lectureRoutes;