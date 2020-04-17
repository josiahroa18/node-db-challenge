const db = require('../../data/dbConfig');

module.exports = {
    getResources,
    addResource,
    findById
}

function getResources(){
    return db('resources');
}

function findById(id){
    return db('resources')
        .where({id})
        .first();
}

function addResource(resource){
    return db('resources')
        .insert(resource)
        .then(id => {
            return findById(id[0]);
        })
}
