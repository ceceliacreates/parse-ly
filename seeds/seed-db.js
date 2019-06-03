const db = require("../models");
const fs = require("fs");
require('dotenv').config({ debug: process.env.DEBUG })


let data = fs.readFileSync("./transplants.json");
let transplants = JSON.parse(data);
console.log(data)

db.sequelize.sync({ force: true }).then(function () {
    db.Plant.bulkCreate(transplants).then(function () {
        console.log("seeded");
    }).catch(function (err) {
        console.log(err);
    });
})