
module.exports = (sequelize, Sequelize) => {
var Admins = sequelize.define('admins', {
    name: {
      type: Sequelize.STRING,
    },
    password:{
        type: Sequelize.STRING
    },
    email:{
          type: Sequelize.STRING,
          validate: {
             isEmail: true,
             }
    }
  })
return Admins;
}