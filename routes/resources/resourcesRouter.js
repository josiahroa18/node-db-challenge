const express = require('express');
const router = express.Router();
const Resources = require('./resourcesModel');

router.get('/', (req, res) => {
    Resources.getResources()
    .then(resources => {
        res.status(201).json(resources);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    Resources.addResource(req.body)
    .then(newResource => {
        res.status(201).json(newResource);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


module.exports = router;