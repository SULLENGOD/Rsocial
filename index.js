const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
const view = require("./view/user");
const sequelize = require('./db/conexion');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use((req,res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

let serverStart = async () => {
    try {
      await sequelize.authenticate();
      console.log("Mysql online");
  
      app.listen(3000, () => {
        console.log("Server on port 3000");
      });
    } catch (error) {
      console.log(`Mysql error`);
    }
  };

  serverStart();

  view(app);