module.exports = (sequelize, Sequelize) => {
    const Testcase = sequelize.define("testcase", {
        name: {
            type: Sequelize.STRING
        },
        projectID: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        priority: {
            type: Sequelize.STRING
        },
        label: {
            type: Sequelize.STRING
        },
        finished: {
            type: Sequelize.BOOLEAN
        },
        assign: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        }
    });

    return Testcase;
};
