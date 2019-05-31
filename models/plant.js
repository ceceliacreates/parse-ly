module.exports = function(sequelize, DataTypes) {
    var Plant = sequelize.define("Plant", {
        plantName: DataTypes.STRING,
        plantType: DataTypes.STRING,
        temperature: DataTypes.INTEGER,
        sunlight: DataTypes.STRING,
        water: DataTypes.STRING,
        pets: DataTypes.BOOLEAN,
        difficulty: DataTypes.STRING
    })
    return Plant;
}