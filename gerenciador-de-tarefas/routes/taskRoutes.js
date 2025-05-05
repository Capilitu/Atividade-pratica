const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.post('/', controller.createTask);
router.get('/', controller.getAllTasks);
router.get('/:id', controller.getTaskById);
router.delete('/:id', controller.deleteTask);

module.exports = router;