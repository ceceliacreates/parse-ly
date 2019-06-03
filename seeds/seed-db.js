const db = require("../models");
const fs = require("fs");
const path = require('path')

let data = fs.readFileSync(path.join(__dirname, "/transplants.json"));
let transplants = JSON.parse(data);
console.log(data)

db.sequelize.sync({ force: true }).then(function () {
    db.Plant.bulkCreate(transplants).then(function () {
        console.log("seeded");
    }).catch(function (err) {
        console.log(err);
    });
})