var Sequelize = require("sequelize"); //requerimos el modulo

var sequelize = new Sequelize('postgres://postgres:37309223@localhost:5432/mascotas');

var User = sequelize.define('user', {
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
  });

  var Animal= sequelize.define('animal', {
      name:{
              type: Sequelize.STRING
      },
      age:{
          type: Sequelize.STRING
      },
      description:{
          type:Sequelize.STRING
      }
  })

sequelize.sync({force: false})
.then(e=>{
    console.log('conectado')
})

