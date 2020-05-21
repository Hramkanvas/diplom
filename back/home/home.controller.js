const express = require('express');
const router = express.Router();
const userService = require('./home.service');

// routes
router.post('/create', create);
router.get('/projects', getAll);
router.delete('/:id', _delete);

module.exports = router;


function create(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(projects => res.json(projects))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
