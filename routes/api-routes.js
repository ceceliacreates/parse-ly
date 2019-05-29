var db = require("../models");

// "Plant" db name can be changed, placeholder db name
module.exports = function(app) {
    app.get("/api/products", function(req, res) {
        db.Plant.findAll().then(function(data) {
            res.json(data)
        })
    })
}