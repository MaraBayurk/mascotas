

module.exports= (sequelize, Sequelize)=>{
  var Animals= sequelize.define('animals', {
    name:{
            type: Sequelize.STRING
    },
    age:{
        type: Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    },
    adopted:{
        type: Sequelize.BOOLEAN
    },
    size:{
        type: Sequelize.ENUM,
        values:['Pequeño', 'Mediano', 'Grande']
    },
    species:{
        type:Sequelize.STRING
    }
})
return Animals
}