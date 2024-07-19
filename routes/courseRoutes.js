const express = require('express');
const courseController = require('../controller/courseController');
const auth = require('../middleware/auth');
const courseRoutes = express.Router();

courseRoutes.post('/',auth,courseController.createCourse);
courseRoutes.get('/',courseController.getAllCourse)
courseRoutes.put('/:id',courseController.updateCourse);
courseRoutes.delete('/:id',courseController.deleteCourse);

courseRoutes.patch('/:id/assignModule',courseController.assignModule);
courseRoutes.get('/:id/module',courseController.getCourseModule);

module.exports = courseRoutes; 