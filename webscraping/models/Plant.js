module.exports = function (sequelize, DataTypes) {
    const Plant = sequelize.define("Plant", {
        commonName: DataTypes.STRING,
        scientificName: DataTypes.STRING,
        lightNeeds: DataTypes.INTEGER,
        waterNeeds: DataTypes.INTEGER,
        tempNeeds: DataTypes.INTEGER,
        potSize: DataTypes.STRING,
        poisonous: DataTypes.BOOLEAN
    });
    return Plant;
}