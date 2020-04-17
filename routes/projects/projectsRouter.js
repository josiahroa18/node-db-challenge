const express = require('express');
const router = express.Router();
const Projects = require('./projectsModel');

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(201).json(projects);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    Projects.addProjects(req.body)
    .then(newProject => {
        res.status(201).json(newProject);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;