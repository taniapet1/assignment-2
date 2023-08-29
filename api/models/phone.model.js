module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            number: Sequelize.STRING,
            contactId: Sequelize.INTEGER,
            foreignKey: true
        }
    });
    return Phone;
};