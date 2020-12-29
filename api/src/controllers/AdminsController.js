const { Admins } = require("../db")

const createAdmin= (name, email, password)=>{
    return new Promise((resolve, reject)=>{
        Admins.create({name, email, password})
        .then((admin)=>{
            resolve(admin)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

const getOneAdmin= (id)=>{
    return new Promise((resolve, reject) => {
        Admins.findOne({
          where: { id }
        })
        .then(admin=>resolve(admin))
        .catch(err=> reject(err))
    })
}

const updateAdmin= (id, name, email, password)=>{
    return new Promise((resolve, reject)=>{
        getOneAdmin(id)
        .then(admin=>{
            if(name) admin.name= name;
            if(email) admin.email= email;
            if(password) admin.password= password;
        return admin.save()
        })
        .then(admin=> resolve(admin))
        .catch(err=> reject(err))
    })
}

const deleteAdmin= (id)=>{
    return new Promise((resolve, reject)=>{
        getOneAdmin(id)
        .then(admin=> {
            admin.destroy()
            resolve('Usuario eliminado')
        })
        .catch(err=> reject(err))
    })
}

module.exports= {
    createAdmin,
    getOneAdmin,
    updateAdmin,
    deleteAdmin
}