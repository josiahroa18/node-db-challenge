const express = require('express');
const router = express.Router();
const Task = require('./tasksModel');

router.get('/', (req, res) => {
    Task.getTasks()
    .then(tasks => {
        res.status(201).json(tasks)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    Task.addTask(req.body)
    .then(newTask => {
        res.status(201).json(newTask);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;