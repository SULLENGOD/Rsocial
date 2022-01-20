const model  = require("../model/user");

module.exports.addGame = async (game) => {
    await model.add(game);
    return "Sucess!";
  };