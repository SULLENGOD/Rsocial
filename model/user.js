const sequelize = require("../db/conexion");
const user = require("../view/user");

let add = async (user) => {
    await sequelize.query(
        `INSERT INTO users ( name, last_name, email, password, img, pais, horario ) VALUES ( '${user.name}', '${user.last_name}', '${user.email}', '${user.password}', '${user.img}', '${user.pais}', '${user.horario}')`
    );
};

let login = async (user) => {
    let result = await sequelize.query(
      `SELECT * FROM users WHERE password = '${user.password}' AND email = '${user.email}'`
    );
    
    if ( result[0] ) {
        return result;
    } else {
        return {
            error: 'Usuario o contraseña incorrecta'
        }
    }
  };

module.exports.add = add;
module.exports.login = login;