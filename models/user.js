module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        results: DataTypes.JSON
    } );
    return User;
}