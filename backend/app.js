const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const app = express();
const dataBaseConnection = require("./Helper/connectDB");

app.use(bodyParser.json());
app.use('/', router);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

const userRoute = require('./routes/userRoute')
const freelanceRoute = require('./routes/freelanceRoute')
const besoinRoute = require('./routes/besoinRoute')
const offreRoute = require('./routes/offreRoute')
const categoryRoute = require('./routes/categoryRoute')
const besoinCategoryRoute = require('./routes/besoinCategoryRoute')


userRoute.init(router)
freelanceRoute.init(router)
besoinRoute.init(router)
offreRoute.init(router)
categoryRoute.init(router)
besoinCategoryRoute.init(router)

dataBaseConnection();


module.exports = app;