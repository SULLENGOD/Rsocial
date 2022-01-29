const model  = require("../model/user");

module.exports.addGame = async (game) => {
    await model.add(game);
    return "Sucess!";
  };

module.exports.logUser = async (user)=>{
  try {
   let result = await model.login(user)
   return result
  } catch (error) {
    return {
      error: error.message
    }
  }
}; 