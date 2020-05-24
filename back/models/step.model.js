module.exports = (sequelize, Sequelize) => {
    const Step = sequelize.define("step", {
        testcaseID: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        expectedResult: {
            type: Sequelize.STRING
        },
        actualResult: {
            type: Sequelize.STRING
        }
    });

    return Step;
};
