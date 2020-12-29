var Sequelize = require("sequelize"); //requerimos el modulo
const AdminsModel = require("./models/Admins");
const AnimalsModel = require("./models/Animals");

var sequelize = new Sequelize('postgres://postgres:37309223@localhost:5432/mascotas');

const Admins= AdminsModel(sequelize,Sequelize)
const Animals= AnimalsModel(sequelize,Sequelize)

Admins.hasMany(Animals);
Animals.belongsTo(Admins);


module.exports = {
    conn: sequelize,
    Admins,
    Animals
};