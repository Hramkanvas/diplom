const testService = require('../test/test.service');
const db = require("../models");
const Project = db.projects;
const Testcase = db.testcases;
const Op = db.Sequelize.Op;

module.exports = {
    getAll,
    create,
    delete: _delete
};

async function getAll() {
    return Project.findAll({ attributes: ['name', 'id']});
}

async function create(projectParams) {
    const newProject = {
        name: projectParams.name
    }
    return Project.create(newProject);
}

async function _delete(id) {
    await Project.destroy({where: {id: id}})
    const arrayOfCases = await testService.getAll(id);
    const arrayOfPromises = []
    arrayOfCases.forEach(elem => {
        arrayOfPromises.push(testService.delete(elem.id))
    })
    await Promise.all(arrayOfPromises);
}
