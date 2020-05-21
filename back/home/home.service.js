const testService = require('../test/test.service');

var projects = [
    {
        id: "1",
        name: "First project",
    },
    {
        id: "2",
        name: "Second project"
    }
]

var lastID = 2;

module.exports = {
    getAll,
    create,
    delete: _delete
};


async function getAll() {
    return projects;
}

async function create(projectParams) {
    lastID += 1;
    const newProject = {
        name: projectParams.name,
        id: lastID.toString()
    }
    projects.push(newProject);
}

async function _delete(id) {
    projects = projects.filter(project => {
        if (project.id === id) {
            testService.delete(id);
        }
        return project.id !== id;
    })
}
