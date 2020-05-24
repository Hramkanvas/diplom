const express = require('express');
const router = express.Router();
const testService = require('./test.service');

// routes
router.post('/create-testcase', createTestcase);
router.get('/testcases/:id', getAll);
router.delete('/:id', _delete);
router.get('/get-steps/:id', getSteps)
router.post('/update-testcase', updateTestcase);

module.exports = router;

function createTestcase(req, res, next) {
    testService.createTestcase(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function updateTestcase(req, res, next) {
    testService.updateTestcase(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    testService.getAll(req.params.id)
        .then(projects => {
            console.log(projects);
            res.send(projects)
        })
        .catch(err => next(err));
}

function getSteps(req, res, next) {
    testService.getSteps(req.params.id)
        .then(projects => res.json(projects))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    testService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
