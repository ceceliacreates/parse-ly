var db = require("../models");

module.exports = function(app) {
    app.get("/api/plants", function(req, res) {
        db.Plant.findAll().then(function(dbPlant) {
            res.json(dbPlant)
        })
    })

    app.get("/api/plants", function(req, res) {
        // match survey result to plant object in database
        // if user hasPets, isPoisonous cannot be true
        
        var query = {};
        var totalDifficulty = 0;
        if (hasPets === true) {
            isPoisonous === false;
        }
        if (light === "high") {
            
        }
        // if (req.query) {
        //     query.lightNeeds = req.query.lightNeeds;
        // }
        db.Plant.findOne({
            where: {
                lightNeeds: req.params.lightNeeds,
                waterNeeds: req.params.waterNeeds,
                tempNeeds: req.params.tempNeeds,
                potSize: req.params.potSize,
                poisonous: req.params.poisonous
            }
        }).then(function(dbPlant) {
            res.json(dbPlant)
        })
    })


}