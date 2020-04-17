const express = require('express');
const resourcesRouter = require('./routes/resources/resourcesRouter');
const projectsRouter = require('./routes/projects/projectsRouter');
const tasksRouter = require('./routes/tasks/tasksRouter');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use('/resources', resourcesRouter);
server.use('/projects', projectsRouter);
server.use('/tasks', tasksRouter);

server.listen(port, () => console.log(`Server running on port ${port}`))