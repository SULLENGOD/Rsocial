const sequelize = require("../db/conexion");
const user = require("../view/user");

let add = async (user) => {
    await sequelize.query(
        `INSERT INTO users ( name, last_name, email, password, img, pais, horario ) VALUES ( '${user.name}', '${user.last_name}', '${user.email}', '${user.password}', '${user.img}', '${user.pais}', '${user.horario}')`
    );
};

module.exports.add = add;