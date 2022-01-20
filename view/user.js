const res = require('express/lib/response');
const controller = require('../controller/user');

module.exports = (app) => {

    app.post("/views/Inc_03", async (req, res) => {
        let user = req.body;
        console.log('user', req.body);
        let result = await controller.addGame(user);
        res.json(result);
    })
}