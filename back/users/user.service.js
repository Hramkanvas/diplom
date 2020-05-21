const config = require('config.json');
const jwt = require('jsonwebtoken');
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

async function authenticate({ username, password }) {

    const user = users.filter(user => user.username === username)[0];
    console.log(password);
    console.log(user.hash);
    console.log(user);
    if (user && password == user.hash) {
        const token = jwt.sign({ sub: user.hash }, config.secret);
        return {
            ...user,
            token
        };
    }

}

async function getAll() {
    return users;
}

async function getById(id) {
    console.log('users', users);
    return users.filter(user => user.hash === id)[0];
}

async function create(userParam) {
    const nn = {};
    nn.username = userParam.username;
    nn.firstName = userParam.firstName;
    nn.lastName = userParam.lastName;
    nn.createdDate = new Date();
    lastID += 1;
    nn.id = lastID.toString();
    nn.hash = userParam.password;
    users.push(nn);
}

async function _delete(id) {
    // await User.findByIdAndRemove(id);
    console.log('delete')
}
