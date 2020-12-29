const { getAllAnimals, createAnimal, editAnimal, deleteAnimal } = require("../controllers/AnimalsController");

const router = require("express").Router();

router
    .route('/')
    .get((req, res)=>{
        getAllAnimals()
        .then(animals=> res.send(animals))
        .catch(err=> res.status(400).json(err))
    })
    .post((req,res)=>{
        let {userId, name, description, size, species, age, adopted}= req.body;
        createAnimal(userId, name, description, size, species, age, adopted)
        .then(animal=> res.send(animal))
        .catch(err=> res.status(400).json(err))
    })

router
    .route("/:id")
    //hacer GET
    .put((req, res)=>{
        let {id}= req.params
        let { name, description, size, species, age, adopted}= req.body;
        editAnimal(id, name, description, size, species, age, adopted)
        .then(animal=> res.send(animal))
        .catch(err=> res.status(400).json(err))
    })
    .delete((req, res)=>{
        console.log(req.params);
        
        let {id}= req.params;
        deleteAnimal(id)
        .then(frase=> res.send(frase))
        .catch(err=> res.status(400).json(err))
    })

    module.exports= router;