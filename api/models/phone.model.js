module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            allowNull:false,
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            allowNull:false,
            type: Sequelize.STRING,
            number: Sequelize.STRING,
            contactId: Sequelize.INTEGER,
            foreignKey: true
        }
    });
    return Phone;
};