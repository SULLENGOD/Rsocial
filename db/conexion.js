const Sequelize = require('sequelize');

const sequelize = new Sequelize('curso_tecla', 'root', null, {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize; 