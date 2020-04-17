const db = require('../../data/dbConfig');

module.exports = {
    getProjects,
    addProjects,
    findById
}

function getProjects(){
    return db('projects')
}

function findById(id){
    return db('projects')
        .where({id})
        .first();
}

function addProjects(project){
    return db('projects')
        .insert(project, 'id')
        .then(id => {
            return findById(id[0])
        })
}