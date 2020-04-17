const db = require('../../data/dbConfig');

module.exports = {
    getTasks,
    addTask,
    findById
}

function getTasks(){
    return db('tasks')
}

function findById(id){
    return db('tasks')
        .where({id})
        .first();
}

function addTask(task){
    return db('tasks')
        .insert(task)
        .then(id => {
            return findById(id[0]);
        })
}