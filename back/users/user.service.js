const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const users = [
    {
        id: "1",
        username: "q",
        hash: "1",
        firstName: "q",
        lastName: "q",
        createdDate: new Date()
    },
    {
        id: "2",
        username: "a",
        hash: "2",
        firstName: "a",
        lastName: "a",
        createdDate: new Date()
    }

]

var lastID = 2;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    delete: _delete
};

async function authenticate({username, password}) {

    const user = await User.findOne({where: {username: {[Op.like]: `%${username}%`}}})
    if (user && password == user.hash) {
        const token = jwt.sign({sub: user.hash}, config.secret);
        return {
            username: user.username,
            token,
            lastName: user.lastName,
            firstName: user.firstName,
            id: user.id
        };
    }

}

async function getAll() {
    return User.findAll({
        attributes: [
            "username",
            "lastName",
            "firstName",
            "id"
        ]
    });
}

async function getById(hash) {
    return User.findOne({where: {hash: {[Op.like]: `%${hash}%`}}})
}

async function create(userParam) {
    const nn = {};
    nn.username = userParam.username;
    nn.firstName = userParam.firstName;
    nn.lastName = userParam.lastName;
    nn.hash = userParam.password;
    User.create(nn)
}

async function _delete(id) {
    return User.destroy({where: {id: id}})
}
