var testcases = [
    {
        id: "1",
        name: "First testcase",
        projectID: "1",
        description: 'some description',
        priority: 'major',
        label: 'randomLabel',
        finished: false,
        assign: "To Me",
        status: "Blocked"
    },
    {
        id: "2",
        name: "Second testcase",
        projectID: "2",
        description: 'some description',
        priority: 'minor',
        label: 'randomLabel2',
        finished: false,
        assign: "To Me",
        status: "Blocked"
    }
]

var steps = [
    {
        id: "1",
        testcaseID: "1",
        description: 'do this',
        expectedResult: 'should be like this',
        actualResult: ''
    },
    {
        id: "2",
        testcaseID: "2",
        description: 'do this2',
        expectedResult: 'should be like this2',
        actualResult: ''
    }
]

var lastID = 2;
var lastStepID = 2;

module.exports = {
    getAll,
    createTestcase,
    delete: _delete,
    getSteps,
    updateTestcase
};

async function getAll(id) {
    return testcases.filter(testcase => testcase.projectID === id);
}

async function getSteps(id) {
    return steps.filter(step => step.testcaseID === id);
}

async function createTestcase(testcaseParams) {
    lastID += 1;
    const newTestcase = {
        id: lastID.toString(),
        name: testcaseParams.name,
        projectID: testcaseParams.projectID,
        description: testcaseParams.description,
        priority: testcaseParams.priority,
        label: testcaseParams.label,
        finished: false,
        assign: testcaseParams.assign,
        status: ""
    };
    testcases.push(newTestcase);
    if (testcaseParams.steps && testcaseParams.steps.length > 0) {
        testcaseParams.steps.forEach(step => {
            lastStepID += 1;
            step.id = lastStepID.toString();
            step.testcaseID = lastID.toString();
            steps.push(step);
        })
    }
}

async function updateTestcase(testcaseParams) {
    const updatedTestcase = {
        id: testcaseParams.id,
        name: testcaseParams.name,
        projectID: testcaseParams.projectID,
        description: testcaseParams.description,
        priority: testcaseParams.priority,
        label: testcaseParams.label,
        finished: testcaseParams.finished,
        assign: testcaseParams.assign,
        status: testcaseParams.status
    };
    console.log(testcaseParams);
    testcases.forEach((element, index) => {
        if (element.id === testcaseParams.id) {
            testcases[index] = updatedTestcase;
        }
    })
    steps = steps.filter(step => step.testcaseID !== testcaseParams.id);
    if (testcaseParams.steps && testcaseParams.steps.length > 0) {
        testcaseParams.steps.forEach(step => {
            lastStepID += 1;
            step.id = lastStepID.toString();
            step.testcaseID = testcaseParams.id.toString();
            steps.push(step);
        })
    }
}

async function _delete(id) {
    testcases = testcases.filter(testcase => {
        return testcase.id !== id
    })
    steps = steps.filter(step => {
        return step.testcaseID !== id
    })
}
