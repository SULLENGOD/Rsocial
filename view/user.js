const res = require('express/lib/response');
const controller = require('../controller/user');

module.exports = (app) => {

    app.post("/views/Inc_03", async (req, res) => {
        let user = req.body;
        console.log('user', req.body);
        let result = await controller.addGame(user);
        res.json(result);
    })

    app.get("/views/Inc_01_04", async (req, res) => {
        let log = req.body;
        console.log(log);
        let result = await controller.logUser(log);
        res.json(result);
      });
    
      app.post("/views/Inc_01_04", async (req, res) => {
        let log = req.body;
        let result = await controller.logUser(log);
        console.log(result[0]);

        res.status(result.error? 400:200).json(result);
        
      });
}