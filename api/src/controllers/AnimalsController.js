const { Animals } = require("../db")


const getAllAnimals= ()=>{
    return new Promise((resolve, reject)=>{
        Animals.findAll()
        .then(animals=> resolve(animals))
        .catch(err=> reject(err))
    })
}

const getOneAnimal= (id)=>{
    return new Promise((resolve,reject)=>{
        Animals.findOne({where: { id } })
        .then(animal=> resolve(animal))
        .catch(err=> reject(err))
    })
}

const createAnimal= (userId, name, description, size, species, age, adopted)=>{
    return new Promise((resolve, reject)=>{
        Animals.create({name, description, size, species, age, adopted})
        .then(animal=> animal.setAdmin(userId))
        .then(animal=> resolve(animal))
        .catch(err=> reject(err))
    })
}

const editAnimal= (id, name, description, size, species, age, adopted)=>{
    return new Promise((resolve, reject)=>{
        getOneAnimal(id)
        .then(animal=>{
            if(name) animal.name= name;
            if(description) animal.description= description;
            if(size) animal.size= size;
            if(species) animal.species= species;
            if(age) animal.age= age;
            if(adopted) animal.adopted= adopted;
        return animal.save();
        })
        .then(animal=> resolve(animal))
        .catch(err=> reject(err))
    })
}

const deleteAnimal= (id)=>{
    return new Promise((resolve, reject)=>{
        getOneAnimal(id)
        .then(animal=> {
            animal.destroy()
            resolve('Animal eliminado')
        })
        .catch(err=> reject(err))
    })
}

module.exports={
    getAllAnimals,
    getOneAnimal,
    createAnimal,
    editAnimal,
    deleteAnimal
}