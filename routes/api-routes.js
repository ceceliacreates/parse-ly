var db = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function(app) {
  app.get('/api/plants', function(req, res) {
    db.Plant.findAll().then(function(plants) {
      res.json(plants);
    });
  });

  app.post('/api/plants', function(req, res) {
    const potSize = (req.body.plantType === "noPreference" ? ["small", "medium", "large"] : req.body.plantType);
    const isPoisonous = (req.body.isPoisonous == 0 ? [0] : [0, 1]);
    db.Plant.findAll({
      where: {
        isPoisonous: {
          [Op.or]: isPoisonous
        },
        totalDifficulty: {
          [Op.between]: [req.body.diffRangeStart, req.body.diffRangeEnd]
        },
        // temperature: {
        //   [Op.contains]: req.body.temperature
        // }
        // light: {
        // [Op.contains]: req.body.light
        // }
          
        plantType: {
          [Op.or]: req.body.plantType
        },
      //   potSize: {
      //     [Op.contains]: potSize
      //   }
      // }
    }
  }
    ).then(function  (response) {
      res.json(response)
    })
  })
};
