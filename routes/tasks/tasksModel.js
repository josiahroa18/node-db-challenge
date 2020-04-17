const db = require('../../data/dbConfig');

module.exports = {
    getTasks,
    addTask,
    findById
}

function getTasks(){
    return db.select('projects.name', 'projects.description', 'tasks.description', 'tasks.completed')
        .from('tasks')
        .join('projects', 'projectId', 'projects.id');
}

function findById(id){
    return db('tasks')
        .where({id})
        .first();
}

function addTask(task){
    return db('tasks')
        .insert(task, 'id')
        .then(id => {
            return findById(id[0]);
        })
}