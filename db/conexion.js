const Sequelize = require('sequelize');

const sequelize = new Sequelize('curso_tecla', 'luis', '12345', {
    dialect: 'mysql',
    host: '192.168.64.2'
})

//sequelize.query('SELECT * FROM users')



module.exports = sequelize;