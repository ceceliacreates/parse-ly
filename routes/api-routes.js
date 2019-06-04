var db = require('../models');

module.exports = function(app) {
  app.get('/api/plants', function(req, res) {
    db.Plant.findAll().then(function(plants) {
      res.json(plants);
    });
  });
};
