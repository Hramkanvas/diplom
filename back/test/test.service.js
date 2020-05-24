const db = require("../models");
const Step = db.steps;
const Testcase = db.testcases;
const Op = db.Sequelize.Op;

module.exports = {
    getAll,
    createTestcase,
    delete: _delete,
    getSteps,
    updateTestcase
};

async function getAll(id) {
    return Testcase.findAll({
        where: {projectID:{ [Op.like]: `%${id}%` }},
        attributes: ["id",
        "name",
        "projectID",
        "description",
        "priority",
        "label",
        "finished",
        "assign",
        "status"]
    })
}

async function getSteps(id) {
    return Step.findAll({ where: {testcaseID:{ [Op.like]: `%${id}%` }} })
}

async function createTestcase(testcaseParams) {
    const newTestcase = {
        name: testcaseParams.name,
        projectID: testcaseParams.projectID,
        description: testcaseParams.description,
        priority: testcaseParams.priority,
        label: testcaseParams.label,
        finished: false,
        assign: testcaseParams.assign,
        status: ""
    };
    const createdTestcase = await Testcase.create(newTestcase);
    const arrayOfSteps = []
    if (testcaseParams.steps && testcaseParams.steps.length > 0) {
        testcaseParams.steps.forEach(step => {
            arrayOfSteps.push(
                {
                    testcaseID: createdTestcase.id.toString(),
                    description: step.description,
                    expectedResult: step.expectedResult,
                    actualResult: ''
                }
            );
        })
    }
    await Step.bulkCreate(arrayOfSteps);
}

async function updateTestcase(testcaseParams) {
    const updatedTestcase = {
        name: testcaseParams.name,
        description: testcaseParams.description,
        priority: testcaseParams.priority,
        label: testcaseParams.label,
        finished: testcaseParams.finished,
        assign: testcaseParams.assign,
        status: testcaseParams.status
    };
    await Testcase.update(updatedTestcase, {where: { id: testcaseParams.id}});
    await Step.destroy({ where: {testcaseID:{ [Op.like]: `%${testcaseParams.id}%` }} });
    const arrayOfSteps = []
    if (testcaseParams.steps && testcaseParams.steps.length > 0) {
        testcaseParams.steps.forEach(step => {
            arrayOfSteps.push(
                {
                    testcaseID: testcaseParams.id,
                    description: step.description,
                    expectedResult: step.expectedResult,
                    actualResult: step.actualResult
                }
            );
        })
    }
    await Step.bulkCreate(arrayOfSteps);
}

async function _delete(id) {
    await Testcase.destroy({where: {id: id}});
    await Step.destroy({ where: {testcaseID:{ [Op.like]: `%${id}%` }} });
}
