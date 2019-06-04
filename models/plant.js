module.exports = function(sequelize, DataTypes) {
  const Plant = sequelize.define('Plant', {
    commonName: DataTypes.STRING,
    scientificName: DataTypes.STRING,
    light: DataTypes.JSON,
    needsDirectLight: DataTypes.BOOLEAN,
    lightDifficulty: DataTypes.INTEGER,
    waterDifficulty: DataTypes.INTEGER,
    temperature: DataTypes.JSON,
    tempDifficulty: DataTypes.INTEGER,
    totalDifficulty: DataTypes.INTEGER,
    potSize: DataTypes.JSON,
    isPoisonous: DataTypes.BOOLEAN
  });
  return Plant;
};
